import { createContext, useReducer } from "react";
import questions from "../data/questions.js";

const STAGES = ["Start", "Quiz", "End"];

const initialState = {
  stage: STAGES[0],
  questions: questions,
  currentQuestion: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        stage: STAGES[1],
      };

    case "SHUFFLE_QUESTIONS":
      const shuffledQuestions = state.questions.sort(() => Math.random() - 0.5);
      return {
        ...state,
        questions: shuffledQuestions,
      };

    case "NEXT_QUESTION":
      if (state.currentQuestion === state.questions.length - 1) {
        return {
          ...state,
          stage: STAGES[2],
        };
      }

      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };

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
