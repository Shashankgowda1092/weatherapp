// src/components/WeatherCard.jsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <Card sx={{ minWidth: 275, margin: 'auto', mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {weather.location.name}, {weather.location.country}
        </Typography>
        <Typography variant="h6" component="div">
          {weather.current.condition.text}
        </Typography>
        <Typography variant="body2">
          Temperature: {weather.current.temp_c}°C
        </Typography>
        <Typography variant="body2">
          Humidity: {weather.current.humidity}%
        </Typography>
        <Typography variant="body2">
          Wind: {weather.current.wind_kph} kph
        </Typography>
        <Typography variant="body2">
          Rain: {weather.current.precip_mm} mm
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
