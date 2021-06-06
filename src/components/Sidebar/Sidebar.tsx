import { VFC } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faHome, faQuestionCircle, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';

export const Sidebar: VFC = () => {
	return (
		<div className="bg-gray-50 border-r-8 border-teal-800 h-screen lg:w-48 md:w-30 p-5">
			<ul className="text-gray-600">
				<li className="mt-5 flex items-center hover:opacity-50">
					<FontAwesomeIcon icon={faHome} className="w-8 mr-3"/>
					<Link href="/">ホーム</Link>
				</li>
				<li className="mt-10 flex items-center hover:opacity-50">
					<FontAwesomeIcon icon={faUsers} className="w-8 mr-3"/>
					<Link href="/Users">
						メンバー
					</Link>
				</li>
				<li className="mt-10 flex items-center hover:opacity-50">
					<FontAwesomeIcon icon={faQuestionCircle} className="w-8 mr-3"/>
					<Link href="/Questions">
						質問
					</Link>
				</li>
				<li className="mt-10 flex items-center hover:opacity-50">
					<FontAwesomeIcon icon={faBook} className="w-8 mr-3"/>
					<Link href="/Memos">メモ</Link>
				</li>
				<li className="mt-10 flex items-center hover:opacity-50">
					<FontAwesomeIcon icon={faChalkboardTeacher} className="w-8 mr-3"/>
					<Link href="/Reviews">レビュー</Link>
				</li>
				<li className="mt-10 flex items-center hover:opacity-50">
					<FontAwesomeIcon icon={faUser} className="w-8 mr-3"/>
					<Link href="/MyPage">マイページ</Link>
				</li>
			</ul>
		</div>
	);
};
