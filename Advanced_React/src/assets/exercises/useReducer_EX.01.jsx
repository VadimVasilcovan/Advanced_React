import React, { useReducer } from "react";

// Reducer function: Decides how the state should change based on the action received
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }; // Increase count
    case "decrement":
      return { count: state.count - 1 }; // Decrease count
    default:
      return state; // Return current state if action type is unknown
  }
};

const Counter = () => {
  // useReducer returns the current state and a dispatcher function to trigger updates
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      
      {/* Dispatcher: Requests state updates by sending actions to the reducer */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

export default Counter;
