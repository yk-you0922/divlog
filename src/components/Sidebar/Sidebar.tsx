import { VFC } from 'react';
import {
	faBook,
	faChalkboardTeacher,
	faHome,
	faQuestionCircle,
	faUser,
	faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { LinkList } from 'src/components/Sidebar/LinkList';

type LinkType = {
	icon: IconProp;
	linkName: string;
	href: string;
};

const LINKITEMS: Array<LinkType> = [
	{ icon: faHome, linkName: 'ホーム', href: '/Login' },
	{ icon: faUsers, linkName: 'メンバー', href: '/Users' },
	{ icon: faQuestionCircle, linkName: '質問', href: '/Questions' },
	{ icon: faBook, linkName: 'メモ', href: '/Memos' },
	{ icon: faChalkboardTeacher, linkName: 'レビュー', href: '/Reviews' },
	{ icon: faUser, linkName: 'マイページ', href: '/MyPage' },
];

export const Sidebar: VFC = () => {
	return (
		<div className="bg-gray-50 border-r-4 border-teal-700 h-screen lg:w-48 md:w-30">
			{LINKITEMS.map((item) => (
				<LinkList key={item.href} icon={item.icon} linkName={item.linkName} href={item.href} />
			))}
		</div>
	);
};
