import { VFC, useState, useCallback, ChangeEvent } from 'react';
import { Select, TextField } from '@material-ui/core';
import { useRouter } from 'next/router';

import { Title } from 'src/components/Header/Title';
import { PrimaryButton } from 'src/components/Button/PrimaryButton';
import { Question } from 'src/types/Question';
console.log('再レンダリング1');

const NewQuestion: VFC = () => {

	const router = useRouter();
	const [title, setTitle] = useState<string>('');
	const [categoryId, setCategoryId] = useState<string>('');
	const [text, setText] = useState<string>('');

	const handleTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setTitle((prevTitle) => e.target.value);
	}, [title]);

	const handleCategoryId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setCategoryId((prevCategoryId) => e.target.value);
	}, [categoryId])

	const handleText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setText((prevText) => e.target.value);
	}, [text]);

	const onClickCreate = useCallback(() => {
		// CreateAPIURL
		const url: string = 'http://localhost:3100/questions';
		// 送信後の遷移先
		const href: string = '/Question/Questions';
		const now: string = new Date().toLocaleString();
		const data: Question = {
			title: title,
			description: text,
			categoryId: categoryId,
			userId: 1,
			username: "test",
			created_at: now,
			updated_at: now,
			status: 0,
		};
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		}).then((response) => {
			if (!response.ok) {
				console.log('Create Error!');
				throw new Error('error');
			}
			console.log('Create OK!');
			router.push(href);
			return response.json();
		});
	}, [title, text]);

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
					<PrimaryButton onClick={onClickCreate}>
						Send
					</PrimaryButton>
				</div>
			</form>
		</div>
	);
};

export default NewQuestion;
