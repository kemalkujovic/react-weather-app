import React from "react";
import classes from "./Location.module.css";
const Location = ({ WeatherData }) => {
  return (
    <div
      className={classes.location}
    >{`${WeatherData.name}, ${WeatherData.sys.country}`}</div>
  );
};

export default Location;
