import { useState, useCallback, ChangeEvent, MouseEvent } from 'react';
import { useRouter } from 'next/router';

import { Question } from 'src/types/Question';

interface newQuestion {
	handleTitle: (e: ChangeEvent<HTMLInputElement>) => void;
	handleCategoryId: (e: ChangeEvent<HTMLInputElement>) => void;
	handleText: (e: ChangeEvent<HTMLInputElement>) => void;
	handleFiles: (e: ChangeEvent<HTMLInputElement>) => void;
	onClickCreate: (e: MouseEvent<HTMLInputElement>) => void;
}

export const useCreateQuestion = (): [
	string,
	number,
	string,
	File[],
	string[],
	newQuestion
] => {
	const router = useRouter();
	const [title, setTitle] = useState<string>('');
	const [categoryId, setCategoryId] = useState<number>();
	const [text, setText] = useState<string>('');
	const [files, setFiles] = useState<File[]>([]);
	const [previews, setPreviews] = useState<string[]>(['../noimage.png']);

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
			let fileURL: string = '';
			let fileURLs: string[] = [];
			for (let i = 0; i < files.length; i++) {
				addedFiles = [...Array.from(addedFiles), files[i]];
				fileURL = window.URL.createObjectURL(addedFiles[i]);
				fileURLs = [...fileURLs, fileURL];
			}
			setPreviews(fileURLs);
			setFiles(addedFiles);
		},
		[files]
	);

	const onClickCreate = useCallback(
		(e: MouseEvent<HTMLInputElement>) => {
			e.preventDefault();
			// CreateAPIURL
			const url: string = 'http://localhost:3100/questions';
			// 送信後の遷移先の指定
			const href: string = '/Question/Questions';
			// 現在日時の取得
			const now: string = new Date().toLocaleString();
      // TODO ベタ書きになっているユーザー情報を動的に変更
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
				return response.json();
			});
			// 処理終了後、遷移させる
			router.push(href);
		},
		[title, text, files, previews]
	);

	return [
		title,
		categoryId,
		text,
		files,
		previews,
		{ handleTitle, handleText, handleCategoryId, handleFiles, onClickCreate },
	];
};
