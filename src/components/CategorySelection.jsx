import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import CategorySelectionIcon from "../assets/category.svg";

import "./CategorySelection.css";

const CategorySelection = () => {
  return (
    <div id="category-container">
      <h2>Select a category</h2>
      <p>The questions will be based on one of the following Web languages:</p>
      <div id="categories">
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
      </div>
      <img src={CategorySelectionIcon} alt="Category selection icon" />
    </div>
  );
};

export default CategorySelection;
