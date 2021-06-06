import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
}

export const PrimaryButton: VFC<Props> = (props) => {
  return (
    <div>
    <button className="bg-teal-700 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
      {props.children}
    </button>
    </div>
  )
}