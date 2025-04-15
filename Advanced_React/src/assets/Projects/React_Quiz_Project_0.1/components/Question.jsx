import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

export default function Question() {
  const { questions, index } = useQuiz();
  const question = questions[index];
  return (
    <div>
      <h4>{question.question}</h4>
      <Options /* question={question} dispatch={dispatch} answer={answer}  *//>
    </div>
  );
}
