import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../src/components/SearchBar';
import WeatherCard from '../src/components/WeatherCard';
import ForecastCard from '../src/components/ForecastCard';
import AirQualityCard from '../src/components/AirQualityCard';
import { Typography } from '@mui/material';
import Watchlist from '../src/components/Watchlist';
import './App.scss'; // Import the SASS file

const App = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(''); // Add state for the city

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
      setCity(city); // Set the city state
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
    <div className="app-container">
      <div className="header">
        <Typography variant="h2" align="center" gutterBottom>
          Weather Application
        </Typography>
        <Typography variant='h5'> Enter the City </Typography>
      </div>
      <div className="content">
        <SearchBar onSearch={fetchWeather} />
        <div className="card">
          <WeatherCard weather={weather} />
        </div>
        <div className="card watchlist-card">
          <Watchlist city={city} /> {/* Pass city as a prop */}
        </div>
        {weather && (
          <>
            <div className="card">
              <ForecastCard city={weather.location.name} />
            </div>
            <div className="card">
              <AirQualityCard city={weather.location.name} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
