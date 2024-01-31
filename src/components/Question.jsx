import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { currentQuestion, questions } = quizState;

  return (
    <div id="question-container">
      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <h2>{questions[currentQuestion].question}</h2>
      <div id="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <p key={index}>
            {String.fromCharCode(index + 97)}. {option}
          </p>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
        Continue
      </button>
    </div>
  );
};

export default Question;
