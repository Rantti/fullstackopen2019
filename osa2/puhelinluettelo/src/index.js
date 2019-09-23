import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
  
  const [persons, setPersons] = useState([
      {
        name: 'Arto Hellas',
        number: '040-1234567',
      },
      {
        name: 'John Smith',
        number: '040-1234567',
      },
      {
        name: 'Matti Meikäläinen',
        number: '040-1234567',
      },
      {
        name: 'Ada Lovelace',
        number: '040-1234567',
      },
    ]);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterString, setFilterString] = useState('');

  const addNumber = function(event) {
    event.preventDefault();

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);

      return;
    }

    setPersons([
      ...persons,
      {
        name: newName,
        number: newNumber,
      }
    ]);
  };

  const handleNameChange = function({ target }) {
    setNewName(target.value);
  };

  const handleNumberChange = function({ target }) {
    setNewNumber(target.value);
  };

  const handleFilterChange = function({ target }) {
    setFilterString(target.value);
  };

  const matchByName = function(item) {
    const itemLowercase = item.name.toLowerCase();
    const filterLowercase = filterString.toLowerCase();

    return itemLowercase.indexOf(filterLowercase) !== -1;
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <Form nameChange={handleNameChange} numberChange={handleNumberChange} onFormSubmit={addNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} filterFunction={matchByName} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));