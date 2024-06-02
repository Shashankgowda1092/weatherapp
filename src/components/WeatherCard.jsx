import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import '../Styles/WeatherCard.scss';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <Box className="weather-card-container">
      <Card variant="outlined" className="weather-card">
        <CardContent className="card-content">
        <Typography className="location" variant="h5" component="div">
            Today's Weather
          </Typography>
          <Typography className="location" variant="h5" component="div">
            {weather.location.name}, {weather.location.country}
          </Typography>
          <Typography className="condition" variant="h6" component="div">
            {weather.current.condition.text}
          </Typography>
          <Typography className="details" variant="body2">
            <div className="detail-item">Temperature: {weather.current.temp_c}°C</div>
            <div className="detail-item">Humidity: {weather.current.humidity}%</div>
            <div className="detail-item">Wind: {weather.current.wind_kph} kph</div>
            <div className="detail-item">Rain: {weather.current.precip_mm} mm</div>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherCard;
