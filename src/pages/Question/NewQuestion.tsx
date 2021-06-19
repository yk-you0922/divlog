import { VFC } from 'react';
import { Select, TextField, Modal } from '@material-ui/core';
import { GetServerSideProps } from 'next';

import { Title } from 'src/components/Header/Title';
import { PrimaryButton } from 'src/components/Button/PrimaryButton';
import { Category } from 'src/types/Category';
// カスタムフック
import { useModal } from 'src/hooks/useModal';
import { useCreateQuestion } from 'src/hooks/useCreateQuestion';

export const getServerSideProps: GetServerSideProps = async (context) => {
	// 外部APIからカテゴリー情報を取得
	const res = await fetch('http://localhost:3100/categories');
	let categories: Category[] = await res.json();
	// データをprops経由でページに渡す
	return { props: { categories } };
};

type Props = {
	categories: Category[];
};

const NewQuestion: VFC<Props> = (props) => {
	// カスタムフック
	const [modal, previewImg, { openModal, closeModal }] = useModal();
	const [
		title,
		categoryId,
		text,
		files,
		previews,
		{ handleTitle, handleText, handleCategoryId, handleFiles, onClickCreate },
	] = useCreateQuestion();

	return (
		<div>
			<Title>質問する</Title>
			<form className="text-center">
				<div className="mt-3">
					<TextField
						className="bg-gray-50 w-10/12"
						id="newQuestionTitle"
						variant="outlined"
						value={title}
						onChange={handleTitle}
					/>
				</div>
				<div className="mt-5">
					<Select
						native
						value={categoryId}
						onChange={handleCategoryId}
						id="newQuestionCategory"
					>
						{props.categories.map((category) => (
							<option key={category.id} value={category.id}>
								{category.name}
							</option>
						))}
					</Select>
				</div>
				<div className="mt-5">
					<TextField
						className="bg-gray-50 w-10/12"
						id="newQuestionText"
						multiline
						rows={15}
						variant="outlined"
						value={text}
						onChange={handleText}
					/>
				</div>
				<div className="mt-5">
					<input type="file" multiple onChange={handleFiles} />
				</div>
				<div className="mt-5">
					{previews.map((preview) => (
						<div key={preview} className="w-80 h-96 m-auto p-10">
							<img
								src={preview}
								alt="preview"
								className="block hover:opacity-50 cursor-pointer"
								onClick={openModal}
							/>
						</div>
					))}
				</div>
				<div className="mt-5">
					<PrimaryButton onClick={onClickCreate}>Send</PrimaryButton>
				</div>
			</form>
			<Modal
				className="flex items-center justify-center"
				open={modal}
				onClose={closeModal}
			>
				<div className="max-w-4xl">
					<img src={previewImg} alt="modal-preview" />
				</div>
			</Modal>
		</div>
	);
};

export default NewQuestion;
