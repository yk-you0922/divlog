import { VFC } from 'react';
import { GetServerSideProps } from 'next';

import { UserCard } from 'src/components/Card/UserCard';
import { User } from 'src/types/User';

export const getServerSideProps: GetServerSideProps = async (context) => {
	// 外部APIから全ユーザー情報を取得
	const res = await fetch('http://localhost:3100/users');
	console.log(context);
	const users = await res.json();
	// データをprops経由でページに渡す
	return { props: { users } };
};

type Props = {
	users: Array<User>;
};

const Users: VFC<Props> = (props) => {
	return (
		<div className="grid grid-cols-2 gap-4">
			{props.users.map((user) => (
				<UserCard user={user} />
			))}
		</div>
	);
};

export default Users;
