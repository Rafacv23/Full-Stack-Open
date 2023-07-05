import { useState } from "react";
import ReactBtn from "./components/react-btn";
import Title from "./components/title";
import Display from "./containers/display";

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const updateGood = () => {
    const newValor = good + 1
    const valorTotal = all + 1
    const valorAverage = average + 1
    setAverage(valorAverage)
    setAll(valorTotal);
    setGood(newValor);
    console.log(newValor);
    console.log(valorTotal)
  }

  const updateNeutral = () => {
    const newValor = neutral + 1
    const valorTotal = all + 1
    const valorAverage = average + 0
    setAverage(valorAverage)
    setAll(valorTotal);
    setNeutral(newValor);
    console.log(newValor);
    console.log(valorTotal)
  }

  const updateBad = () => {
    const newValor = bad + 1
    const valorTotal = all + 1
    const valorAverage = average - 1
    setAverage(valorAverage)
    setAll(valorTotal);
    setBad(newValor);
    console.log(newValor);
    console.log(valorTotal)
  }

  const positiveComments = (good, all) => {
    const positiveCommentsTotal = (good / all) * 100
    const positiveCommentsTotalTruncated = Number(positiveCommentsTotal.toFixed(2))
    return positiveCommentsTotalTruncated +"%"
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
      <Display contadorGood={good} contadorNeutral={neutral} contadorBad={bad} 
      contadorAll={all} contadorAverage={average} contadorPositive={all > 0 ? positiveComments(good, all) : "No hay datos disponibles"}></Display>
    </div>
  );
}

export default App;
