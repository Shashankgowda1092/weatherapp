import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Box } from '@mui/material';
import '../Styles/ForecastCard.scss';

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
            days: 6
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
    <Box className="forecast-card-container">
      {forecast.forecast.forecastday.map(day => (
        <Card key={day.date} className="forecast-card">
          <CardContent className="card-content">
          <Typography className="location" variant="h5" component="div">
            6 days Forecast
          </Typography>
            <Typography className="date" variant="h6" component="div">
              {day.date}
            </Typography>
            <Typography className="detail-item" variant="body2">
              Condition: {day.day.condition.text}
            </Typography>
            <Typography className="detail-item" variant="body2">
              Max Temp: {day.day.maxtemp_c}°C
            </Typography>
            <Typography className="detail-item" variant="body2">
              Min Temp: {day.day.mintemp_c}°C
            </Typography>
            <Typography className="detail-item" variant="body2">
              Rain: {day.day.totalprecip_mm} mm
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ForecastCard;
