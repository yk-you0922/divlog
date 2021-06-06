import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
}

export const Title: VFC<Props> = (props) => {
  return (
    <div className="w-full">
      <h1 className="mt-3 mb-5">{props.children}</h1>
    </div>
  )
}