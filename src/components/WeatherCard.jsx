import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const WeatherCard = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return (
    <Box sx={{ minWidth: 275, margin: 'auto', mt: 2 }}>
      <Card variant="outlined" color="transparent" sx={{ minWidth: 275 }}>
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
    </Box>
  );
};

export default WeatherCard;
