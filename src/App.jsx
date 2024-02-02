import { useContext, useEffect } from "react";

import { QuizContext } from "./context/quiz";
import StartingPage from "./components/StartingPage";
import CategorySelection from "./components/CategorySelection";
import Question from "./components/Question";
import GameFinished from "./components/GameFinished";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Coding Quiz</h1>
      {quizState.stage === "Start" && <StartingPage />}
      {quizState.stage === "Category" && <CategorySelection />}
      {quizState.stage === "Quiz" && <Question />}
      {quizState.stage === "End" && <GameFinished />}
    </div>
  );
}

export default App;
