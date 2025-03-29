import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import "./index.css";

const initialState = {
    question: [],
    //"loding", "error", "ready", "active", "finished"
    status: 'loading'
}

function reducer(state, action){
switch(action.type){
    case 'dataReceived':
        return{...state, question: action.payload,
        status: 'ready'
        } 
}
}

export default function AppReactQuiz() {
    const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type: 'dataReceived', payload: data}))
      .catch((err) => console.error('error'));
  }, []);
  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}
