import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Heading = ({title}) => {
    return (
        <h1>{title}</h1>
    )
}

const Statistic = ({text, value}) => {
    return (
        <p>{text}: {value}</p>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onGoodClick = () => {
    setGood(good + 1);
  }

  const onNeutralClick = () => {
    setNeutral(neutral + 1);
  }

  const onBadClick = () => {
    setBad(bad + 1);
  }

  return (
    <div>
        <Heading title="give feedback" />
        <button onClick={onGoodClick}>good</button>
        <button onClick={onNeutralClick}>neutral</button>
        <button onClick={onBadClick}>bad</button>
        <Heading title="statistics" />
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={good + neutral + bad} />
        <Statistic text="average" value={(good - bad) / (good + bad + neutral) || 0} />
        <Statistic text="positive" value={`${good / (good + bad + neutral) * 100 || 0} %`} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
