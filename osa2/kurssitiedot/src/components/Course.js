import React from 'react';

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
      {parts.map(part => ( <Part key={part.id} name={part.name} exercises={part.exercises} /> ))}
    </div>
  );
};

const Totals = ({ parts }) => {
  return (
    <b>
      Total of {parts.reduce((result, part) => result + part.exercises, 0)} exercises
    </b>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Totals parts={course.parts} />
    </div>
  );
};

export default Course;
