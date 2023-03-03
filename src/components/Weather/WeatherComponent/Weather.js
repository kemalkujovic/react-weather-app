import React from "react";
import Card from "../../Card/Card";
import sunset from "../../../assets/icons/temp.svg";
import sunrise from "../../../assets/icons/temp.svg";
import humidity1 from "../../../assets/icons/humidity.svg";
import wind from "../../../assets/icons/wind.svg";
import pressure from "../../../assets/icons/pressure.svg";
import fada from "../../../assets/icons/sunny.svg";
import AppHeaderText from "../../WeatherInfo/AppHeaderText";
import Location from "../../WeatherInfo/Location";
import ImgIcon from "../../WeatherInfo/ImgIcon";
const Weather = (props) => {
  const WeatherData = props.data;
  const city = WeatherData.name;
  const country = WeatherData.sys.country;
  const { description, id } = WeatherData.weather[0];
  const { feels_like, humidity, temp } = WeatherData.main;
  console.log(description, id, city, feels_like, humidity, temp);
  // const WeatherIcons = {
  //   "01d": "../../../assets/icons/sunny.svg",
  //   "01n": "../../../assets/icons/night.svg",
  //   "02d": "../../../assets/icons/day.svg",
  //   "02n": "../../../assets/icons/cloudy-night.svg",
  //   "03d": "../../../assets/icons/cloudy.svg",
  //   "03n": "../../../assets/icons/cloudy.svg",
  //   "04d": "../../../assets/icons/perfect-day.svg",
  //   "04n": "../../../assets/icons/cloudy-night.svg",
  //   "09d": "../../../assets/icons/rain.svg",
  //   "09n": "../../../assets/icons/rain-night.svg",
  //   "10d": "../../../assets/icons/rain.svg",
  //   "10n": "../../../assets/icons/rain-night.svg",
  //   "11d": "../../../assets/icons/storm.svg",
  //   "11n": "../../../assets/icons/storm.svg",
  // };

  return (
    <Card>
      <div>
        <AppHeaderText>Weather App</AppHeaderText>
        <span>{`${Math.floor(temp - 273)}°C`}</span>
        {`  |  ${description}`}
        <ImgIcon WeatherData={WeatherData} />
        <Location WeatherData={WeatherData} />
        <img src={sunrise}></img>
        <img src={wind}></img>
        <img src={pressure}></img>
        <img src={humidity1}></img>
        <h1>{Math.round((props.data.main.feels_like - 273.15) * 10) / 10}</h1>
        <h1>{props.data.main.humidity}</h1>
        <h1>{props.data.main.pressure}</h1>
        <h1>{props.data.wind.speed}</h1>
      </div>
    </Card>
  );
};

export default Weather;
