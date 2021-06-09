import { ReactNode, VFC } from 'react';
import Link from 'next/link';

type Props = {
	children: ReactNode;
	href: string;
};

export const LinkButton: VFC<Props> = (props) => {
	return (
		<Link href={props.href}>
			<div className="p-5 w-24 h-24 rounded-full hover:bg-blue-300 cursor-pointer bg-blue-400 text-white font-bold text-center">
				{props.children}
			</div>
		</Link>
	);
};
