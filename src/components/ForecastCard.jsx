// src/components/ForecastCard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box } from '@mui/material';

const ForecastCard = ({ city }) => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const fetchForecast = async () => {
      const API_KEY = '4c40958bdef14ec2aac60752243105'; // Replace with your WeatherAPI key
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
          params: {
            key: API_KEY,
            q: city,
            days: 5
          }
        });
        setForecast(response.data);
      } catch (error) {
        console.error("Error fetching the forecast data", error);
      }
    };

    if (city) {
      fetchForecast();
    }
  }, [city]);

  if (!forecast) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', mt: 2 }}>
      {forecast.forecast.forecastday.map(day => (
        <Card key={day.date} sx={{ minWidth: 200, margin: 1 }}>
          <CardContent>
            <Typography variant="h6" component="div">
              {day.date}
            </Typography>
            <Typography variant="body2">
              Condition: {day.day.condition.text}
            </Typography>
            <Typography variant="body2">
              Max Temp: {day.day.maxtemp_c}°C
            </Typography>
            <Typography variant="body2">
              Min Temp: {day.day.mintemp_c}°C
            </Typography>
            <Typography variant="body2">
              Rain: {day.day.totalprecip_mm} mm
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ForecastCard;
