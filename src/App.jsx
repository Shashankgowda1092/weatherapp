// src/App.jsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ForecastCard from './components/ForecastCard';
import AirQualityCard from './components/AirQualityCard';
import { Typography } from '@mui/material';
import './App.css'; // Import the CSS file

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  const fetchWeather = async (city) => {
    const API_KEY = '4c40958bdef14ec2aac60752243105'; // Replace with your WeatherAPI key
    try {
      const weatherResponse = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
        params: {
          key: API_KEY,
          q: city,
        }
      });
      setWeather(weatherResponse.data);
      setCity(city);

    } catch (error) {
      console.error("Error fetching the weather data", error);
      if (error.response) {
        if (error.response.status === 401) {
          alert("Unauthorized: Please check your API key");
        } else if (error.response.status === 404) {
          alert("City not found");
        } else {
          alert("Error: Unable to fetch weather data");
        }
      } else {
        alert("Network error: Please check your connection");
      }
    }
  };

  return (
    <> 

    <div>
    <Typography variant="h2" align="center" gutterBottom>
        Weather Application 
      </Typography>
      <SearchBar onSearch={fetchWeather} />
      <WeatherCard weather={weather} />
      {city && <ForecastCard city={city} />}
      {city && <AirQualityCard city={city} />}
    </div>
    </>
  );
};

export default App;
