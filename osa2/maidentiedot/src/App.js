import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Results from './components/Results';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchString, setSearchString] = useState('');

  const hook = () => {
    axios.get('https://restcountries.eu/rest/v2/all').then(res => {
      setCountries(res.data);
    });
  };
  useEffect(hook, []);

  const setSearch = ({ target }) => {
    setSearchString(target.value);
  };

  const results = () => countries.filter(matchByName);

  const matchByName = function(item) {
    const itemLowercase = item.name.toLowerCase();
    const searchLowerCase = searchString.toLowerCase();

    return itemLowercase.indexOf(searchLowerCase) !== -1;
  };

  return (
    <div>
      <p>
        find countries <input onChange={setSearch} />
      </p>

      <Results countries={results()} setSearchString={setSearchString} />
    </div>
  );
}

export default App;
