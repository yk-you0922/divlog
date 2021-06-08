import React, { VFC } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { QuestionCard } from 'src/components/Card/QuestionCard';
import { Title } from 'src/components/Header/Title';
import { Question } from 'src/types/Question';
import { LinkButton } from 'src/components/Button/LinkButton';

export const getServerSideProps: GetServerSideProps = async (context) => {
	// 外部APIから全ユーザー情報を取得
	const res = await fetch('http://localhost:3100/questions');
	console.log(context);
	let questions: Array<Question> = await res.json();
	// データをprops経由でページに渡す
	return { props: { questions } };
};

type Props = {
	questions: Array<Question>;
};

const Questions: VFC<Props> = (props) => {
	console.log(props);
	return (
		<div>
			<Title>質問</Title>
			<div className="md:grid md:grid-cols-2 gap-4">
				{props.questions.map((question) => (
					<div key={question.id} className="mt-5 lg:mt-1">
						<QuestionCard question={question} />
					</div>
				))}
			</div>
			<div className="flex absolute bottom-10 right-5">
				<div className="mr-3">
					<Link href="/Question/NewQuestion">
						<LinkButton>
							質問
							<br />
							する
						</LinkButton>
					</Link>
				</div>
				<div>
					<LinkButton>
						質問
						<br />
						探す
					</LinkButton>
				</div>
			</div>
		</div>
	);
};

export default Questions;
