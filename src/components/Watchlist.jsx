import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';
import '../Styles/Watchlist.scss'; // Import the SCSS file

const Watchlist = ({ city }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchlist = () => {
    if (!watchlist.includes(city)) {
      setWatchlist(prevWatchlist => [...prevWatchlist, city]);
    }
  };

  const toggleCity = (selectedCity) => {
    setCity(selectedCity);
  };

  return (
    <div className="watchlist-container">
      <Typography variant='h5' className="watchlist-title">Watchlist</Typography>
      <div className="watchlist-buttons">
        {watchlist.map((watchedCity, index) => (
          <Button key={index} onClick={() => toggleCity(watchedCity)} className="watchlist-button">
            {watchedCity}
          </Button>
        ))}
      </div>
      <Button variant="outlined" onClick={addToWatchlist} className="add-button">Add to Watchlist</Button>
    </div>
  );
};

export default Watchlist;
