import { useReducer } from "react";
import ButtonForEx from "./ButtonForEx";
import HeaderBankEx from "./HeaderBankEx";
import DisplayingData from "./displayingData";
import InsertValue from "./InsertValue";

const initialState = {
  disabling: true,
  balance: 0,
  loan: 0,
  customerAmount: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SubmitAmount":
      return {
        ...state,
        customerAmount: action.payload,
      };
    case "openAccount":
      return {
        ...state,
        disabling: false,
        balance: 500,
      };
    case "deposit":
      return {
        ...state,
        balance: state.balance + state.customerAmount,
        customerAmount: 0,
      };
    case "withdrow":
      if (state.balance >= state.customerAmount) {
        return {
          ...state,
          balance: state.balance - state.customerAmount,
          customerAmount: 0,
        };
      }
      return state;
    case "requestLoan":
      return {
        ...state,
        balance:
          state.loan === 0
            ? state.balance + state.customerAmount
            : state.balance,
        loan: state.loan === 0 ? state.loan + state.customerAmount : state.loan,
        customerAmount: 0,
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
  const [{ disabling, balance, loan, customerAmount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <>
      <InsertValue customerAmount={customerAmount} dispatch={dispatch} />
      <HeaderBankEx />
      <DisplayingData balance={balance} loan={loan} />
      <ButtonForEx
        dispatch={dispatch}
        disabling={disabling}
        customerAmount={customerAmount}
      />
    </>
  );
}
