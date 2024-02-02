import { createContext, useReducer } from "react";
import questions from "../data/questions_complete.js";

const STAGES = ["Start", "Category", "Quiz", "End"];

const initialState = {
  stage: STAGES[0],
  questions: questions,
  currentQuestion: 0,
  score: 0,
  optionSelected: "",
  help: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        stage: STAGES[1],
      };

    case "PICK_CATEGORY":
      const category = action.payload;
      const categoryQuestions = state.questions.filter(
        (question) => question.category === category
      );
      return {
        ...state,
        stage: STAGES[2],
        questions: categoryQuestions[0].questions,
      };

    case "SHUFFLE_QUESTIONS":
      const shuffledQuestions = state.questions.sort(() => Math.random() - 0.5);
      return {
        ...state,
        questions: shuffledQuestions,
      };

    case "SHOW_HINT":
      return {
        ...state,
        help: "hint",
      };

    case "NEXT_QUESTION":
      if (!state.questions[state.currentQuestion + 1]) {
        return {
          ...state,
          stage: STAGES[3],
          help: false,
        };
      }

      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        optionSelected: "",
        help: false,
      };

    case "RESTART":
      return initialState;

    case "CHECK_ANSWER":
      if (state.answerSelectd) return state;

      const { answer, selected } = action.payload;

      return {
        ...state,
        score: answer === selected ? state.score + 1 : state.score,
        optionSelected: selected,
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
