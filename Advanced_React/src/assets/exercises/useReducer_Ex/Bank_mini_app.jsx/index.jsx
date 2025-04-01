import { useReducer } from "react";
import ButtonForEx from "./ButtonForEx";
import HeaderBankEx from "./HeaderBankEx";
import DisplayingData from "./displayingData";

const initialState = {
  disabling: true,
  balance: 0,
  loan: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "openAccount":
      return {
        ...state,
        disabling: false,
        balance: 500,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + 150,
      };
    case "withdrow":
      if (state.balance >= 50) {
        return {
          ...state,
          balance: state.balance - 50,
        };
      }
      return state;
    case "requestLoan":
      return {
        ...state,
        balance: state.loan === 0 ? state.balance + 5000 : state.balance,
        loan: state.loan === 0 ? state.loan + 5000 : state.loan,
      };
    case "payLoan":
      if (state.balance >= state.loan)
        return {
          ...state,
          loan: 0,
          balance: state.balance - state.loan,
        };
    case "closeAccount":
      if (state.balance === 0 && state.loan === 0) return { ...initialState };
  }
}

export default function BanckMiniApp() {
  const [{ disabling, balance, loan }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <HeaderBankEx />
      <DisplayingData balance={balance} loan={loan} />
      <ButtonForEx dispatch={dispatch} disabling={disabling} />
    </>
  );
}
