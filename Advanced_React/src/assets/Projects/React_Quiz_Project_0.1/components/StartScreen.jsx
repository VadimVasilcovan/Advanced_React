import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function StartScreen() {
  const {
    
    dispatch,
    numQuestions,
    
  } = useQuiz();
  return (
    <div className="start">
      <h2>Welcome to the React Quiz!</h2>
      <h3>{numQuestions} questions to test your reaact mastery</h3>
      <button className="btn btn-ui" onClick={()=> dispatch({type: 'start'})}>Let's start</button>
    </div>
  );
}
