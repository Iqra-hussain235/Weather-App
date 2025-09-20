import React, { useEffect, useState } from 'react';
import './Sidebar.css';

const quotes = [
  'Wherever you go, no matter what the weather, always bring your own sunshine.',
  'Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating.',
  'There is no such thing as bad weather, only different kinds of good weather.',
  'To appreciate the sun, you gotta know what rain is.',
  'Some people feel the rain. Others just get wet.'
];

const Sidebar = ({ sunrise, sunset, airQuality, location, time }) => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-section">
        <h3>Location & Time</h3>
        <div>{location}</div>
        <div>{time}</div>
      </div>
      <div className="sidebar-section">
        <h3>Sunrise & Sunset</h3>
        <div>Sunrise: {sunrise}</div>
        <div>Sunset: {sunset}</div>
      </div>
      <div className="sidebar-section">
        <h3>Air Quality</h3>
        <div>{airQuality}</div>
      </div>
      <div className="sidebar-section">
        <h3>Quote</h3>
        <em>{quote}</em>
      </div>
    </div>
  );
};

export default Sidebar;
