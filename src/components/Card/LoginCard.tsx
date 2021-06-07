import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
}

export const LoginCard:VFC<Props> = (props) => {
  return (
    <div className="bg-white rounded-lg text-center p-5 shadow-2xl hover:bg-gray-50">
      {props.children}
    </div>
  )
}