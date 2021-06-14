import { VFC, useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import { Select, TextField, Modal } from '@material-ui/core';
import { useRouter } from 'next/router';

import { Title } from 'src/components/Header/Title';
import { PrimaryButton } from 'src/components/Button/PrimaryButton';
import { Question } from 'src/types/Question';

const NewQuestion: VFC = () => {
	const router = useRouter();
	const [title, setTitle] = useState<string>('');
	const [categoryId, setCategoryId] = useState<number>();
	const [text, setText] = useState<string>('');
	const [files, setFiles] = useState<File[]>([]);
	const [previews, setPreviews] = useState<string[]>(['../noimage.png']);
	const [modal, setModal] = useState<boolean>(false);

	const handleTitle = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setTitle((prevTitle) => e.target.value);
		},
		[title]
	);

	const handleCategoryId = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setCategoryId(e.target.valueAsNumber);
		},
		[categoryId]
	);

	const handleText = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setText((prevText) => e.target.value);
		},
		[text]
	);

	const handleFiles = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const { files } = e.target;
			let addedFiles: File[] = [];
			let addStringFiles: string[];
			let fileURL: string = '';
			let fileURLs: string[] = [];
			for (let i = 0; i < files.length; i++) {
				addedFiles = [...Array.from(addedFiles), files[i]];
				const stringFiles: string[] = [''];
				addStringFiles = [...stringFiles];
				fileURL = window.URL.createObjectURL(addedFiles[i]);
				fileURLs = [...fileURLs, fileURL];
			}
			setPreviews(fileURLs);
			setFiles(addedFiles);
		},
		[files]
	);

	const openModal = useCallback(
		(e: MouseEvent<HTMLInputElement>) => {
			console.log(e.target);
			setModal(true);
		},
		[modal]
	);

	const closeModal = useCallback(() => {
		setModal(false);
	}, [modal]);

	const onClickCreate = useCallback(
		(e: MouseEvent<HTMLInputElement>) => {
			// CreateAPIURL
			const url: string = 'http://localhost:3100/questions';
			// 送信後の遷移先の指定
			const href: string = '/Question/Questions';
			// 現在日時の取得
			const now: string = new Date().toLocaleString();
			const data: Question = {
				title: title,
				description: text,
				categoryId: categoryId,
				files: previews,
				userId: 1,
				username: 'test',
				created_at: now,
				updated_at: now,
				status: 0,
			};
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			}).then((response) => {
				if (!response.ok) {
					console.log('Create Error!');
					throw new Error('error');
				}
				console.log('Create OK!');
				//TODO: 質問一覧への遷移(できない)
				router.push(href);
				return response.json();
			});
		},
		[title, text, files, previews]
	);

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
						<option value={0}>未選択</option>
						<option value={1}>HTML</option>
						<option value={2}>CSS</option>
						<option value={3}>JavaScript</option>
						<option value={4}>React</option>
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
						<div
							key={preview}
							className="w-80 h-96 m-auto p-10"
							onClick={openModal}
						>
							<img
								src={preview}
								alt="preview"
								className="block hover:opacity-50 cursor-pointer"
							/>
						</div>
					))}
				</div>
				<div className="mt-5">
					<PrimaryButton onClick={onClickCreate}>Send</PrimaryButton>
				</div>
			</form>

				<Modal className="flex items-center justify-center" open={modal} onClose={closeModal}>
					<img src="../noimage.png" alt="modal-preview" />
				</Modal>
		</div>
	);
};

export default NewQuestion;
