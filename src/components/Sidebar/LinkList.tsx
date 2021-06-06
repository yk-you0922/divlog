import { VFC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type Props = {
	icon: IconProp;
	linkName: string;
	href: string;
};

export const LinkList: VFC<Props> = (props) => {
	return (
		<div>
			<Link href={props.href}>
				<div className="p-5 flex items-center hover:opacity-50 hover:bg-gray-200">
					<FontAwesomeIcon icon={props.icon} className="w-8 mr-3" />
					{props.linkName}
				</div>
			</Link>
		</div>
	);
};
