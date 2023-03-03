import React from "react";
import classes from "./WeatherInfo.module.css";
const AppTemp = ({ WeatherData }) => {
  return (
    <div className={classes.temp}>
      <span>{`${Math.floor(WeatherData.main.temp - 273)}°C`}</span>
      {`  |  ${WeatherData.weather[0].description}`}
    </div>
  );
};

export default AppTemp;
