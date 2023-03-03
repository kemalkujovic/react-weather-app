import React from "react";
import classes from "./WeatherInfo.module.css";
const ImgIcon = ({ WeatherData }) => {
  return (
    <div className={classes.ImgIcons}>
      <img
        src={`https://openweathermap.org/img/w/${WeatherData.weather[0].icon}.png`}
      ></img>
    </div>
  );
};

export default ImgIcon;
