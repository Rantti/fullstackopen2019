import React from 'react';
import Weather from './Weather';

function Results({ countries, setSearchString }) {
  if (countries.length >= 10) {
    return (
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    );
  }

  if (countries.length > 1) {
    return (
      <div>
        {countries.map(country => (
          <p key={country.name}>{country.name} <button onClick={() => setSearchString(country.name)}>show</button></p>
        ))}
      </div>
    );
  }

  if (countries.length === 1) {
    const [country] = countries;
    return (
      <div>
        <h2>{country.name}</h2>
        <p>
          capital {country.capital} <br />
          population {country.population}
        </p>
        <h3>languages</h3>
        <ul>
          {country.languages.map(lang => (
            <li key={lang.name}>{lang.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt='flag' width='auto' height='100px' />
        <Weather city={country.capital} />
      </div>
    );
  }

  return (
    <div>
      <p>No matches for country</p>
    </div>
  );
}
export default Results;
