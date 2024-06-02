import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import '../Styles/SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
    setCity(''); // Reset the city state after search
  };

  return (
    <Box className="search-bar-container">
      <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
        InputLabelProps={{ style: { color: 'black' } }}
        InputProps={{
          style: {
            color: 'black',
          },
        }}
      />
      <Button variant="contained" onClick={handleSearch} className="search-button">Search</Button>
    </Box>
  );
};

export default SearchBar;
