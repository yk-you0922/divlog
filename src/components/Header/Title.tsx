import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
}

export const Title: VFC<Props> = (props) => {
  return (
    <div className="w-full">
      <h1 className="text-center mt-3 mb-5 text-6xl">{props.children}</h1>
    </div>
  )
}