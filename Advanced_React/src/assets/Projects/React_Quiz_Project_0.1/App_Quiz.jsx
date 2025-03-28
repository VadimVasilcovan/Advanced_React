import Header from "./Header";
import Main from "./Main";
import "./index.css";

export default function AppReactQuiz() {
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
