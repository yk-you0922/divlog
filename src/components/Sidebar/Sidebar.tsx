import { VFC } from 'react';
import Link from 'next/link';

export const Sidebar: VFC = () => {
	return (
		<div className="bg-gray-50 border-r-4 border-blue-100 h-screen w-40 p-5">
			<ul className="text-center">
				<li className="mt-5">
					<Link href="/">ホーム</Link>
				</li>
				<li className="mt-10">
					<Link href="/Users">メンバー</Link>
				</li>
				<li className="mt-10">
					<Link href="/Questions">質問</Link>
				</li>
				<li className="mt-10">
					<Link href="/Memos">メモ</Link>
				</li>
				<li className="mt-10">
					<Link href="/Reviews">レビュー依頼</Link>
				</li>
				<li className="mt-10">
					<Link href="/MyPage">マイページ</Link>
				</li>
			</ul>
		</div>
	);
};
