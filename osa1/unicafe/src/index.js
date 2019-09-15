import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Heading = ({ title }) => {
  return <h1>{title}</h1>;
};

const Button = ({ title, action }) => {
  return <button onClick={action}>{title}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <table>
      <tbody>
        <Statistic text='good' value={good} />
        <Statistic text='neutral' value={neutral} />
        <Statistic text='bad' value={bad} />
        <Statistic text='all' value={good + neutral + bad} />
        <Statistic
          text='average'
          value={(good - bad) / (good + bad + neutral) || 0}
        />
        <Statistic
          text='positive'
          value={`${(good / (good + bad + neutral)) * 100 || 0} %`}
        />
      </tbody>
    </table>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGoodClick = () => {
    setGood(good + 1);
  };

  const onNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const onBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Heading title='give feedback' />
      <Button title='good' action={onGoodClick} />
      <Button title='neutral' action={onNeutralClick} />
      <Button title='bad' action={onBadClick} />
      <Heading title='statistics' />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
