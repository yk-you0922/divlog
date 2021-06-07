import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { VFC } from 'react';

import { Question } from 'src/types/Question';

type Props = {
  question: Question;
}

export const QuestionCard: VFC<Props> = (props) => {
	return (
		<div className="bg-white w-80 h-60 md:w-auto rounded-lg min-h-full p-5 shadow-xl hover:bg-gray-50">
      <div>
			  <FontAwesomeIcon icon={faQuestionCircle} className="w-10"/>
      </div>
      <div className="mt-3">
        {props.question.title}
      </div>
      <div className="mt-3">
        {props.question.description}
      </div>
      <div className="mt-3">

        {props.question.username}
      </div>
      <div>
        投稿日：{props.question.created_at}
      </div>
		</div>
	);
};
