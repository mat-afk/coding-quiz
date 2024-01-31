import QuizIcon from "../assets/quiz.svg";

import "./StartingPage.css";

const StartingPage = () => {
  return (
    <div id="starting-container">
      <h2>Welcome!</h2>
      <p>Click on the button below to start =)</p>
      <button>Start</button>
      <img src={QuizIcon} alt="Quiz icon" />
    </div>
  );
};

export default StartingPage;
