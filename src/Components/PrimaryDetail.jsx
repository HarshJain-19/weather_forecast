import React, { useState, useMemo } from 'react';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const PrimaryDetail = ({wInfo}) => {
    var iconStyle2 = { fontSize: 45, color: 'White'};
    const [dt,setDT] = useState(new Date());
    setInterval(() => {
      setDT(new Date());
    },1000);
    const getMainIcon = (wMood) => {
        switch (wMood) {
          case "Clouds": return "cloud";
          case "Haze": return "foggy";
          case "Clear_m": return "wb_sunny";
          case "Clear_n": return "clear_night";
          case "Mist": return "mist";
          case "shower rain": 
          case "Rain": return "rainy";
          case "thunderstorm": return "thunderstorm";
          case "few clouds_m": return "partly_cloudy_day";
          case "few clouds_n": return "partly_cloudy_night";
          case "snow": return "ac_unit";
          default : 
            return "wb_sunny"; 
        }
    };

    const getMainIcon_DN = useMemo(() => {
      let wMood = wInfo.weathermood;
      if (wMood==="Clear" || wMood==="few clouds") {
        if (dt.getHours>=6 && dt.getHours<=7) {
          wMood+="_m";
        } else {
          wMood+="_n";
        }
      } 
      let x = getMainIcon(wMood);
      return x;
    },[wInfo.weathermood, dt.getHours])
    
  return (
    <div className='detBoxP'>
      <span className="material-symbols-outlined mainIcon">{getMainIcon_DN}</span>
      <div className="mainDet">
        <div className='com temp'>
            <ThermostatIcon sx={iconStyle2} className='tempIcon' />
            <h1>{wInfo.temp}&deg;C</h1>
        </div>
        <div className="com sec">
            <h1>{wInfo.weathermood}</h1>
            <h2 style={{color: 'lime'}}>{wInfo.name}, {wInfo.country}</h2>
        </div>
        <div className='com timeSec'>
            <h1>{dt.toLocaleTimeString()}</h1>
            <h1>{dt.toLocaleDateString()}</h1>
        </div>
      </div>
    </div>
  )
}

export default PrimaryDetail
