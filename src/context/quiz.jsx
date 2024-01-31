import { createContext } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  return (
    <QuizContext.Provider value={{ name: "Conding Quiz" }}>
      {children}
    </QuizContext.Provider>
  );
};
