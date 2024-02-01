import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDoneIcon from "../assets/welldone.svg"

import "./GameFinished.css";

const GameFinished = () => {
  return <div id="gamefinished-container">
    <h2>Game Finished</h2>
    <p>Final score: {5}</p>
    <p>You got {5} questions right!</p>
    <img src={WellDoneIcon} alt="Well done icon" />
    <button>Restart</button>
  </div>;
};

export default GameFinished;
