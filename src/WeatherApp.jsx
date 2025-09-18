import React from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

const WeatherApp = () => {
    const [weatherInfo,setweatherInfo]=useState({
          city:"Mumbai",
        feelsLike:24.84,
        temp:26.05,
        tempMin:25.56,
        tempMax:27.22,
        humidity:83,
        weather:"scattered clouds",
    });
    
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    };

  return (
    <div style={{textAlign:"center"}}>
        <h1 style={{color:'blue'}}>WeatherApp</h1>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      
    </div>
  );
}

export default WeatherApp;
