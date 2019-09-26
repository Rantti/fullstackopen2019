import React from 'react';

const Persons = ({ persons, filterFunction, onRemove }) => {
  return (
    <div>
      {persons.filter(filterFunction).map((person, index) => (
        <p key={index}>
          {person.name} {person.number}
          <button onClick={onRemove(person.id, person.name)}>Remove</button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
