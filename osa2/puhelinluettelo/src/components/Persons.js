import React from 'react';

const Persons = ({ persons, filterFunction }) => {
  return (
    <div>
      {persons.filter(filterFunction).map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default Persons;
