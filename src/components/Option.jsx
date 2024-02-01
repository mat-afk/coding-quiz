import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Option.css";

const Option = ({ option, answer, selectOption }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  const checkClasses = () => {
    return `option ${quizState.optionSelected === option ? "selected" : ""} ${
      quizState.optionSelected && quizState.optionSelected !== option
        ? "not-selected"
        : ""
    } ${
      quizState.optionSelected === option && option === answer ? "correct" : ""
    }
      ${
        quizState.optionSelected === option && option !== answer ? "wrong" : ""
      }`;
  };

  return (
    <div
      className={checkClasses()}
      onClick={() => {
        if (!quizState.optionSelected) selectOption();
      }}
    >
      <p>{option}</p>
    </div>
  );
};

export default Option;
