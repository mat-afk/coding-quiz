import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
 
  return <div>Question</div>;
};

export default Question;