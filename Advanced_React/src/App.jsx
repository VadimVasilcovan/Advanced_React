import AppReactQuiz from "./assets/Projects/React_Quiz_Project_0.1/components/App_Quiz";
import { QuizProvider } from "./assets/Projects/React_Quiz_Project_0.1/context/QuizContext.jsx";
import BanckMiniApp from "./assets/exercises/useReducer_Ex/Bank_mini_app.jsx";

function App() {
  return (
    <>
      <QuizProvider>
        <AppReactQuiz />
      </QuizProvider>
      {/*  <BanckMiniApp/> */}
    </>
  );
}

export default App;
