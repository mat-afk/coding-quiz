import { createContext, useReducer } from "react";
import questions from "../data/questions.js";

const STAGES = ["Start", "Quiz", "End"];

const initialState = {
  stage: STAGES[0],
  questions: questions,
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case "CHANGE_STAGE":
      return state;

    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  return (
    <QuizContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </QuizContext.Provider>
  );
};
