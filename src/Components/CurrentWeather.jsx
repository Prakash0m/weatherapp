import React from "react";

const CurrentWeather = () => {
  return (
    <div className="current-weather">
      <img src="icons/clouds.svg" className="weather-icon" />
      <h2 className="temperature">
        20 <span>°C</span>
      </h2>
      <p className="description">Partly cloudy</p>
    </div>
  );
};

export default CurrentWeather;
