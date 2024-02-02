import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import CategorySelectionIcon from "../assets/category.svg";

import "./CategorySelection.css";

const CategorySelection = () => {
  const [{ questions }, dispatch] = useContext(QuizContext);

  const pickCategory = (category) => {
    dispatch({ type: "PICK_CATEGORY", payload: category });
    dispatch({ type: "SHUFFLE_QUESTIONS" });
  };

  return (
    <div id="category-container">
      <h2>Select a category</h2>
      <p>The questions will be based on one of the following Web languages:</p>
      <div id="categories">
        {questions.map((question, index) => (
          <button key={index} onClick={() => pickCategory(question.category)}>
            {question.category}
          </button>
        ))}
      </div>
      <img src={CategorySelectionIcon} alt="Category selection icon" />
    </div>
  );
};

export default CategorySelection;
