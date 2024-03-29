import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const { currentQuestion, questions } = quizState;

  const handleSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: questions[currentQuestion].answer, selected: option },
    });
  };

  return (
    <div id="question-container">
      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>
      <h2>{questions[currentQuestion].question}</h2>
      <div id="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <Option
            key={index}
            option={option}
            answer={questions[currentQuestion].answer}
            selectOption={() => handleSelectOption(option)}
          />
        ))}
      </div>
      {!quizState.optionSelected && !quizState.help && (
        <>
          {quizState.questions[currentQuestion].tip && (
            <button onClick={() => dispatch({ type: "SHOW_HINT" })}>
              Hint
            </button>
          )}
          <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Remove an option
          </button>
        </>
      )}
      {!quizState.optionSelected && quizState.help === "hint" && (
        <p className="hint">{quizState.questions[currentQuestion].tip}</p>
      )}
      {quizState.optionSelected && (
        <button onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
          Continue
        </button>
      )}
    </div>
  );
};

export default Question;
