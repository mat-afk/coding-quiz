import { useContext } from "react";

import { QuizContext } from "./context/quiz";
import StartingPage from "./components/StartingPage";
import Question from "./components/Question";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Coding Quiz</h1>
      {quizState.stage === "Start" && <StartingPage />}
      {quizState.stage === "Quiz" && <Question />}
    </div>
  );
}

export default App;
