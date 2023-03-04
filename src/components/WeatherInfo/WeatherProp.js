import React from "react";
import classes from "./WeatherInfo.module.css";
const WeatherProp = (props) => {
  return (
    <div className={classes["weather-prop"]}>
      <div>
        <img src={props.src}></img>
      </div>
      <div>
        <h1>{props.weatherResult}</h1>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};

export default WeatherProp;
