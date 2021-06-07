import { VFC } from 'react';

import { User } from 'src/types/User';

type Props = {
	user: User;
};

export const UserCard: VFC<Props> = (props) => {
	return (
		<div className="bg-white rounded-lg min-h-full text-center p-5 shadow-xl hover:bg-gray-50">
			<div>
        {/* 画像の代わり */}
				<div className="bg-green-500 w-10 h-10 sm:w-20 sm:h-20 rounded-full m-auto"></div>
			</div>
			<div className="mt-5 text-2xl font-semibold font-mono">
				{props.user.username}
			</div>
			<div className="mt-5">{props.user.description}</div>
		</div>
	);
};
