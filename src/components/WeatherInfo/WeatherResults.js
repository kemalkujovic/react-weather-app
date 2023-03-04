import React from "react";
import classes from "./WeatherInfo.module.css";
import WeatherProp from "./WeatherProp";

const WeatherResults = (props) => {
  const data = [
    {
      name: "Feels like",
      icon_link: "../../assets/icons/temp.svg",
    },
    {
      name: "Humidity",
      icon_link: "../../assets/icons/humidity.svg",
    },
    {
      name: "Wind",
      icon_link: "../../assets/icons/wind.svg",
    },
    {
      name: "Pressure",
      icon_link: "../../assets/icons/pressure.svg",
    },
  ];
  return (
    <div>
      {data.map((el) => {
        return <WeatherProp src={el.icon_link} title={el.name} key={el.name} />;
      })}
    </div>
  );
};

export default WeatherResults;