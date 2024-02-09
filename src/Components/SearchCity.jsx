import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import "./InStyle.css";

const SearchCity = ({getWeatherInfo}) => {
  var [w,setW] = useState(window.innerWidth);
  useEffect(() => {
    setW(window.innerWidth);
  },[window.innerWidth]);
  const [city, setCity] = useState("");
  
  return (
    <div className='searchCon'>
      <div className="searchBox">
        <span><SearchIcon sx={{ fontSize: (w<500? 20 : 30), color: 'midnightblue' }} className='searchIcon'/></span>
        <input type='search' className='search' name='search' placeholder='Search City...' value={city} onChange={e => setCity(e.target.value)} />
      </div>
      <div  className='sBtn'>
        <Button variant="outlined" style={{backgroundColor: 'lightcyan'}} sx={{ fontSize: (w<500 ? 15 : 20), color: 'midnightblue' }} onClick={() => getWeatherInfo(city)} >Search</Button>
      </div>
    </div>
  )
}

export default SearchCity
