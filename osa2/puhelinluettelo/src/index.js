import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import personsApi from './service/persons';

import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);

  const hook = () => {
    personsApi.getAll().then(res => {
      setPersons(res.data);
    });
  };
  useEffect(hook, []);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterString, setFilterString] = useState('');

  const addNumber = function(event) {
    event.preventDefault();

    const existingPerson = persons.find(person => person.name === newName);

    if (existingPerson && window.confirm(`${newName} is already added to phonebook, replace old number with new one?`)) {

      const updatedPerson = {
        ...existingPerson,
        ...{ number: newNumber },
      };

      personsApi.update(updatedPerson).then(({ data }) => {
        const { number, id } = data;
        setPersons(persons.map(person => {
          if (person.id === id) {
            person.number = number;
          }

          return person;
        }));
      });

      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    personsApi.create(personObject).then(({ data }) => {
      const { name, number, id } = data;

      setPersons([
        ...persons,
        {
          name,
          number,
          id,
        },
      ]);
    });
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
  };

  const removeById = (id, name) => () =>{
    if (window.confirm(`Poistetaanko henkilö ${name}?`)){
      personsApi.remove(id).then(() => {
            setPersons(persons.filter(person => person.id !== id));
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={handleFilterChange} />
      <h2>Add a new</h2>
      <Form
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
        onFormSubmit={addNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} filterFunction={matchByName} onRemove={removeById} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
