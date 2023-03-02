import React from "react";
import Card from "../../Card/Card";
import sunset from "../../../assets/icons/temp.svg";
import sunrise from "../../../assets/icons/temp.svg";
import humidity from "../../../assets/icons/humidity.svg";
import wind from "../../../assets/icons/wind.svg";
import pressure from "../../../assets/icons/pressure.svg";
import fada from "../../../assets/icons/sunny.svg";
const Weather = (props) => {
  console.log(props.data.weather[0].icon);
  const city = props.data.name;
  const { description, id } = props.data.weather[0];
  const { feels_like, humidity, temp } = props.data.main;
  console.log(description, id, city, feels_like, humidity, temp);
  const WeatherIcons = {
    "01d": "../../../assets/icons/sunny.svg",
    "01n": "../../../assets/icons/night.svg",
    "02d": "../../../assets/icons/day.svg",
    "02n": "../../../assets/icons/cloudy-night.svg",
    "03d": "../../../assets/icons/cloudy.svg",
    "03n": "../../../assets/icons/cloudy.svg",
    "04d": "../../../assets/icons/perfect-day.svg",
    "04n": "../../../assets/icons/cloudy-night.svg",
    "09d": "../../../assets/icons/rain.svg",
    "09n": "../../../assets/icons/rain-night.svg",
    "10d": "../../../assets/icons/rain.svg",
    "10n": "../../../assets/icons/rain-night.svg",
    "11d": "../../../assets/icons/storm.svg",
    "11n": "../../../assets/icons/storm.svg",
  };
  console.log(WeatherIcons[props.data?.weather[0].icon]);
  return (
    <Card>
      <div>
        <h5>React Weather App</h5>
        <span>{`${Math.floor(temp - 273)}°C`}</span>
        {`  |  ${description}`}
        <img
          src={`https://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
        />
      </div>
    </Card>
  );
};

export default Weather;
