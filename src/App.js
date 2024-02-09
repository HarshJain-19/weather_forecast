import React, { useEffect, useState } from "react";
import "./Style.css";
import SearchCity from "./Components/SearchCity";
import Details from "./Components/Details";

function App() {
  const [wInfo, setWInfo] = useState({});
  const getWeatherInfo = async (x) => {
    x = x.trim()==="" ? "delhi" : x;
    try {
      // let url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${x}&units=metric&appid=2279c2d8e28afd2323b0469d9b05559b`;
      let data = await (await fetch(url)).json();
      console.log(data);

      var {temp, humidity, pressure} = data.main;
      var {main:weathermood} = data.weather[0];
      var {name} = data;
      var {speed} = data.wind;
      var {country, sunset} = data.sys;

      let d = new Date(sunset*1000);
      var sunset = d.toLocaleTimeString(); 
      setWInfo({temp, humidity, pressure, weathermood, name, speed, country, sunset });
    } catch(err) {
      alert("Invalid Input...");
      console.log(err);
    }
  }
  useEffect(() => {getWeatherInfo("delhi")},[]);
  return (
    <>
      <div className="container">
        <h1>My Weather Forecast </h1>
        <SearchCity getWeatherInfo={getWeatherInfo}/>
        <Details wInfo={wInfo}/>
      </div>
    </>
  );
}

export default App;
