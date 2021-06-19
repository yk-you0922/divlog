import { useState, useCallback, MouseEvent } from 'react';

interface Modal {
  openModal: (e: MouseEvent<HTMLImageElement>) => void;
  closeModal: () => void;
}

export const useModal = (): [boolean, string, Modal] => {
	const [previewImg, setPreviewImg] = useState<string>('');
	const [modal, setModal] = useState<boolean>(false);

	const openModal = useCallback(
		(e: MouseEvent<HTMLImageElement>): void => {
			const imgUrl = e.currentTarget;
			setPreviewImg(imgUrl.src);
			setModal(true);
		},
		[modal]
	);

	const closeModal = useCallback((): void => {
		setModal(false);
	}, [modal]);

	return [modal, previewImg, { openModal, closeModal }];
};
