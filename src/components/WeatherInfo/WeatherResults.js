import React from "react";
import classes from "./WeatherInfo.module.css";
import WeatherProp from "./WeatherProp";

const WeatherResults = (props) => {
  const data = [
    {
      name: "Feels like",
      icon_link: "icons/temp.svg",
    },
    {
      name: "Humidity",
      icon_link: "icons/humidity.svg",
    },
    {
      name: "Wind",
      icon_link: "icons/wind.svg",
    },
    {
      name: "Pressure",
      icon_link: "icons/pressure.svg",
    },
  ];
  return (
    <div className={classes.resultProps}>
      {data.map((el) => {
        return <WeatherProp src={el.icon_link} title={el.name} key={el.name} />;
      })}
    </div>
  );
};

export default WeatherResults;
