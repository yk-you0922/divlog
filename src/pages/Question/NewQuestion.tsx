import { VFC } from "react";
import { Title } from "src/components/Header/Title";

const NewQuestion:VFC = () => {
  return (
    <div>
      <Title>質問する</Title>
      <div className="w-8/12 h-80 bg-gray-200">
        ここにマークダウンエディターがきます
      </div>
    </div>
  )
}

export default NewQuestion;