import React from 'react';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import AirIcon from '@mui/icons-material/Air';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const SecondaryDetail = ({wInfo}) => {
    var iconStyle = { fontSize: 50, color: 'white' };
  return (
    <div className='detBoxS'>
      <div className="item i0">
        <WbTwilightIcon sx ={iconStyle} className='icon'/>
        <div className="iDesc">
            <h1>{wInfo.sunset}</h1>
            <h1>Sunset</h1>
        </div>
      </div>
      <div className="item i1">
        <WaterDropIcon sx ={iconStyle} className='icon'/>
        <div className="iDesc">
            <h1>{wInfo.humidity}</h1>
            <h1>Humidity</h1>
        </div>
      </div>
      <div className="item i2">
        <ArrowDropDownIcon sx ={iconStyle} className='icon'/>
        <div className="iDesc">
            <h1>{wInfo.pressure} MM</h1>
            <h1>Pressure</h1>
        </div>
      </div>
      <div className="item i3">
        <AirIcon sx ={iconStyle} className='icon'/>
        <div className="iDesc">
            <h1>{wInfo.speed}</h1>
            <h1>Wind</h1>
        </div>
      </div>
    </div>
  )
}

export default SecondaryDetail


