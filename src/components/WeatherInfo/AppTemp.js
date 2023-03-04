import React from "react";
import classes from "./WeatherInfo.module.css";
import ImgIcon from "./ImgIcon";
const AppTemp = ({ WeatherData }) => {
  return (
    <div className={classes.temp}>
      <span>
        {`${Math.floor(WeatherData.main.temp - 273)}°C`}
        {`  |  ${WeatherData.weather[0].description}`}
      </span>
      <ImgIcon WeatherData={WeatherData} />
    </div>
  );
};

export default AppTemp;
