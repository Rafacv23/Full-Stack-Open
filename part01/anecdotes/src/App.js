import { useState } from "react";
import Display from "./containers/display.jsx"
function App() {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState("")
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const voting = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const randomise = () => {
    const randomItem = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomItem);
  };

  return (
      <Display anecdote={selected === "" ? "Presiona el botón para comenzar" : anecdotes[selected]}
      value={votes[selected]}
      vote={voting}
      random={randomise}/>
  );
}

export default App;
