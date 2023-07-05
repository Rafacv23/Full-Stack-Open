import { useState } from "react";
import ReactBtn from "./components/react-btn";
import Title from "./components/title";
import Display from "./containers/display";

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    const newValor = good + 1
    setGood(newValor);
    console.log(newValor);
  }

  const updateNeutral = () => {
    const newValor = neutral + 1
    setNeutral(newValor);
    console.log(newValor);
  }

  const updateBad = () => {
    const newValor = bad + 1
    setBad(newValor);
    console.log(newValor);
  }

  return (
    <div className="body">
      <Title name={"Give Feedback"}></Title>
      <div className="row">
      <ReactBtn handleClick={updateGood} name={"Good"}></ReactBtn>
      <ReactBtn handleClick={updateNeutral} name={"Neutral"}></ReactBtn>
      <ReactBtn handleClick={updateBad} name={"Bad"}></ReactBtn>
      </div>
      <Title name={"Stadistics"}></Title>
      <Display contadorGood={good} contadorNeutral={neutral} contadorBad={bad}></Display>
    </div>
  );
}

export default App;
