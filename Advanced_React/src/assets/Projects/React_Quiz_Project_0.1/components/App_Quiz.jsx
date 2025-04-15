import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loader from "./Loader.jsx";
import StartScreen from "./StartScreen.jsx";
import Question from "./Question.jsx";
import NextButton from "./NextButton.jsx";
import "../index.css";
import Progress from "./Progress.jsx";
import FinishScreen from "./FinishScreen.jsx";
import Footer from "./Footer.jsx";
import Timer from "./Timer.jsx";
import { useQuiz } from "../context/QuizContext.jsx";

export default function AppReactQuiz() {
  const {
    questions,
    status,
    index,
    answer,
    points,
    highscore,
    secondsRemaining,
    dispatch,
    numQuestions,
    maxPossiblePoints,
  } = useQuiz();

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question
              /* question={questions[index]}
              dispatch={dispatch}
              answer={answer} */
            />
            <Footer>
              <Timer />
              <NextButton />
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
    </div>
  );
}
