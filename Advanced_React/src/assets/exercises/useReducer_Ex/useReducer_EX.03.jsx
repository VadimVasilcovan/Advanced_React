import { useEffect, useReducer } from "react";

const initialState = {
  question: [],
  status: "loading",
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return { ...state, question: action.payload, status: "ready" };
    case "FailedToLoad":
      return { ...state, status: "error" };
    default:
      return state;
  }
};

export default function UseReducerEX03() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const response = await data.json();
        dispatch({ type: "dataReceived", payload: response });
      } catch (err) {
        console.err(err);
        dispatch({ type: "FailedToLoad", payload: err });
      }
    }
    getData();
  }, []);
  return (
    <>
      {state.status === "loading" && <p>Loading...</p>}
      {state.status === "errot" && <p>Error loading data.</p>}
      {state.status === "ready" &&
        state.question.map((user) => {
          <p key={user.id}>{user.name}</p>;
        })}
    </>
  );
}
