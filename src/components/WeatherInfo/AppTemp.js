import React from "react";
import classes from "./WeatherInfo.module.css";
import ImgIcon from "./ImgIcon";
const AppTemp = ({ WeatherData }) => {
  let temp;
  if (WeatherData.main.temp > 200) {
    temp = Math.floor(WeatherData.main.temp - 273);
  } else {
    temp = WeatherData.main.temp.toFixed(1);
  }
  return (
    <div className={classes.temp}>
      <span>
        {`${temp}°C`}
        {`  |  ${WeatherData.weather[0].description}`}
      </span>
      <ImgIcon WeatherData={WeatherData} />
    </div>
  );
};

export default AppTemp;
