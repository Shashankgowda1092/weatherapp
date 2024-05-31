// src/components/AirQualityCard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography } from '@mui/material';

const AirQualityCard = ({ city }) => {
  const [airQuality, setAirQuality] = useState(null);

  useEffect(() => {
    const fetchAirQuality = async () => {
      const API_KEY = '4c40958bdef14ec2aac60752243105'; // Replace with your WeatherAPI key
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json`, {
          params: {
            key: API_KEY,
            q: city,
            aqi: 'yes'
          }
        });
        setAirQuality(response.data);
      } catch (error) {
        console.error("Error fetching the air quality data", error);
      }
    };

    if (city) {
      fetchAirQuality();
    }
  }, [city]);

  if (!airQuality) {
    return null;
  }

  const aqi = airQuality.current.air_quality;

  return (
    <Card sx={{ minWidth: 275, margin: 'auto', mt: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Air Quality in {airQuality.location.name}
        </Typography>
        <Typography variant="body2">
          PM2.5: {aqi.pm2_5.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          PM10: {aqi.pm10.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          O3: {aqi.o3.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          NO2: {aqi.no2.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          SO2: {aqi.so2.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          CO: {aqi.co.toFixed(2)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AirQualityCard;
