import React, { useEffect, useState } from 'react';
import WeatherApp from './WeatherApp';
import Sidebar from './Sidebar';
import './App.css';


function App() {
  const sunrise = '06:12 AM';
  const sunset = '06:45 PM';
  const airQuality = 'Good (AQI 42)';
  const location = 'Mumbai, India';
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main-layout">
      <div className="sidebar-box left-box">
        <div className="sidebar-section">
          <h3>Location & Time</h3>
          <div>{location}</div>
          <div>{time}</div>
        </div>
        <div className="sidebar-section">
          <h3>Sunrise</h3>
          <div>Sunrise: {sunrise}</div>
        </div>
      </div>
      <div className="weatherapp-center">
        <WeatherApp />
      </div>
      <div className="sidebar-box right-box">
        <div className="sidebar-section">
          <h3>Air Quality</h3>
          <div>{airQuality}</div>
        </div>
        <SidebarQuote />
      </div>
    </div>
  );
}

function SidebarQuote() {
  const quotes = [
    'Wherever you go, no matter what the weather, always bring your own sunshine.',
    'Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating.',
    'There is no such thing as bad weather, only different kinds of good weather.',
    'To appreciate the sun, you gotta know what rain is.',
    'Some people feel the rain. Others just get wet.'
  ];
  const [quote, setQuote] = useState(quotes[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="sidebar-section">
      <h3>Quote</h3>
      <em>{quote}</em>
    </div>
  );
}

export default App;
