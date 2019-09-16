import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
        {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </div>
  );
};

const Totals = ({ parts }) => {
  return (
    <p>Total of {parts.reduce((result, part) => result + part.exercises, 0)} exercises</p>
  )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Totals parts={course.parts} />
        </div>
    );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4,
      },
    ],
  };

  return (
    <div>
        <Course course={course} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
