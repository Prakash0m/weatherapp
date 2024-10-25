import React from "react";

const HourlyWeather = () => {
  return (
    <li className="weather-item">
      <p className="time">00:00</p>
      <img src="icons/clouds.svg" className="weather-icon" />
      <p className="time">20°</p>
    </li>
  );
};

export default HourlyWeather;
