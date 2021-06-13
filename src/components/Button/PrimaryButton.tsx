import { MouseEvent, ReactNode, VFC } from 'react';

type Props = {
	children: ReactNode;
	onClick?: (e: MouseEvent<HTMLInputElement>) => void;
};

export const PrimaryButton: VFC<Props> = (props) => {
	return (
		<div>
			<button 
				className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded" 
				onClick={props.onClick}
			>
				{props.children}
			</button>
		</div>
	);
};
