import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = props => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(6).fill(0));
  const [topIndex, setTopIndex] = useState(0);

  const getRandomAnecdoteIndex = () => {
    const min = 0;
    const max = anecdotes.length - 1;

    // @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const newAnecdote = () => {
    const randomIndex = getRandomAnecdoteIndex();

    if (randomIndex === selected) {
      return newAnecdote();
    }

    return randomIndex;
  };

  const voteAnecdote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    const topIndex = newPoints.indexOf(Math.max(...newPoints));
    setTopIndex(topIndex);
    setPoints(newPoints);
  };

  const nextAnecdote = () => {
    setSelected(newAnecdote());
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <button onClick={voteAnecdote}>Vote</button>
      <button onClick={nextAnecdote}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{props.anecdotes[topIndex]}</p>
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
