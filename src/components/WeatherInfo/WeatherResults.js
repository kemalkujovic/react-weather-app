import React from "react";
import classes from "./WeatherInfo.module.css";
import WeatherProp from "./WeatherProp";

const WeatherResults = ({ props, WeatherData }) => {
  let feelsLike;
  if (WeatherData.main.feels_like > 200) {
    feelsLike = (Math.round(WeatherData.main.feels_like - 273.15) * 10) / 10;
  } else {
    feelsLike = WeatherData.main.feels_like.toFixed(1);
  }
  const data = [
    {
      name: "Feels like",
      icon_link: "icons/temp.svg",
      id: Math.random().toString(36).slice(2),
    },
    {
      name: "Humidity",
      icon_link: "icons/humidity.svg",
      id: Math.random().toString(36).slice(2),
    },
    {
      name: "Wind",
      icon_link: "icons/wind.svg",
      id: Math.random().toString(36).slice(2),
    },
    {
      name: "Pressure",
      icon_link: "icons/pressure.svg",
      id: Math.random().toString(36).slice(2),
    },
  ];

  return (
    <div className={classes.weatherResultInfo}>
      <WeatherProp
        src={data[0].icon_link}
        title={data[0].name}
        weatherResult={feelsLike}
        key={data[0].id}
      />
      <WeatherProp
        src={data[1].icon_link}
        title={data[1].name}
        weatherResult={WeatherData.main.humidity}
        key={data[1].id}
      />
      <WeatherProp
        src={data[2].icon_link}
        title={data[2].name}
        weatherResult={WeatherData.wind.speed}
        key={data[2].id}
      />
      <WeatherProp
        src={data[3].icon_link}
        title={data[3].name}
        weatherResult={WeatherData.main.pressure}
        key={data[3].id}
      />
    </div>
  );
};

export default WeatherResults;
