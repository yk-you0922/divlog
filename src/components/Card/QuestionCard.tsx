import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { VFC } from 'react';

import { Question } from 'src/types/Question';

type Props = {
	question: Question;
};

export const QuestionCard: VFC<Props> = (props) => {
	return (
		<div className="bg-white w-auto h-64 rounded-lg min-h-full p-5 shadow-xl hover:bg-gray-50">
			<div className="mt-5">
				<FontAwesomeIcon icon={faQuestionCircle} className="w-10" />
			</div>
			<div className="mt-5 text-center">{props.question.title}</div>
			<div className="mt-5 flex justify-around">
				<div className="bg-green-500 w-14 h-14 rounded-full m-auto"></div>
				<div>
					<div className="mt-3">{props.question.username}</div>
					<div>投稿日：{props.question.created_at}</div>
				</div>
			</div>
		</div>
	);
};
