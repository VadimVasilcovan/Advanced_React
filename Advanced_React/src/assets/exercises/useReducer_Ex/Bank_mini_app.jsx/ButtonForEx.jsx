import React from "react";

export default function ButtonForEx({ dispatch, disabling }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: "openAccount" })}>
        Open account
      </button>
      <button disabled={disabling} onClick={()=>dispatch({type: 'deposit'})}>Deposit</button>
      <button disabled={disabling} onClick={()=>dispatch({type: 'withdrow'})}>Withdrow</button>
      <button disabled={disabling} onClick={()=>dispatch(({type: 'requestLoan'}))}>Request a loan of 5000</button>
      <button disabled={disabling} onClickCapture={()=>dispatch({type: 'payLoan'})}>Pay loan</button>
      <button disabled={disabling} onClick={()=>dispatch({type: 'closeAccount'})}>Close account</button>
    </div>
  );
}
