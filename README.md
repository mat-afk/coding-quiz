# Conding Quiz

A web development quiz in React. The user can select a category of questions, related to one of the three main web programming languages: HTML, CSS and JavaScript. Some questions have hints, but in all of them, a button can be pressed to remove an incorrect option and provide a clue.

Built with React and Vite, the project uses a [`quiz context`](https://github.com/mat-afk/coding-quiz/blob/main/src/context/quiz.jsx), as well as a reducer, to manage the state of the application, such as its stages, the user's score and the various actions that can be triggered by it in the different components.

![React](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Getting Started

1. Clone this repository and enter it
   ```sh
   git clone https://github.com/mat-afk/coding-quiz.git
   cd coding-quiz
   ```
2. Install dependencies

   ```sh
   npm install
   ```

3. Run the app

   ```sh
   npm run dev
   ```

4. Open the indicated port to view it in the browser.
   ![Starting](public/image.png)

5. Pick a category.
   ![Category selection](public/image-1.png)

6. Enjoy the quiz!
   ![Coding quiz](public/image-2.png)
   ![Coding quiz](public/image-3.png)
   ![Coding quiz](public/image-4.png)
   ![Score](public/image-5.png)
