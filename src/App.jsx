import { useContext, useEffect } from "react";

import { QuizContext } from "./context/quiz";
import StartingPage from "./components/StartingPage";
import Question from "./components/Question";
import GameFinished from "./components/GameFinished";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "SHUFFLE_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Coding Quiz</h1>
      {quizState.stage === "Start" && <StartingPage />}
      {quizState.stage === "Quiz" && <Question />}
      {quizState.stage === "End" && <GameFinished />}
    </div>
  );
}

export default App;
