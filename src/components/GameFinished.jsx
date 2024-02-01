import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDoneIcon from "../assets/welldone.svg";

import "./GameFinished.css";

const GameFinished = () => {
  const [{ questions, score }, dispatch] = useContext(QuizContext);

  return (
    <div id="gamefinished-container">
      <h2>Game Finished</h2>
      <p>Final score: {score}</p>
      <p>
        You got {score} out of {questions.length} questions right!
      </p>
      <img src={WellDoneIcon} alt="Well done icon" />
      <button onClick={() => dispatch({ type: "RESTART" })}>Restart</button>
    </div>
  );
};

export default GameFinished;
