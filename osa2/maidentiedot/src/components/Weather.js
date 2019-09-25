import React, { useState, useEffect } from 'react';
import axios from 'axios';
const { apiKey } = require('../config/weatherstack.json');

function Weather({city}) {
  const [weather, setWeather] = useState({});

  const hook = () => {
    axios.get(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`).then(({data}) => {
      setWeather(data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
        <h1>Weather in {city}</h1>
        <p>temperature {weather.current ? weather.current.temperature : ''}</p>
        <p><img alt="weather icons" src={weather.current ? weather.current.weather_icons : ''} /></p>
        <p>wind: { weather.current ? weather.current.wind_speed : ''} kph direction: {weather.current ? weather.current.wind_dir : ''}</p>
    </div>
  );
}

export default Weather;
