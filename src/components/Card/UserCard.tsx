import { VFC } from "react";

import { User } from 'src/types/User';

type Props = {
  user: User;
}

export const UserCard:VFC<Props> = (props) => {
  return (
    <div className="bg-white rounded-lg h-60 text-center p-5 shadow-xl hover:bg-gray-50">
      <div>
        {props.user.username}
      </div>
    </div>
  )
}