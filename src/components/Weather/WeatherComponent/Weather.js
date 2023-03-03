import React from "react";
import Card from "../../Card/Card";
import AppHeaderText from "../../WeatherInfo/AppHeaderText";
import Location from "../../WeatherInfo/Location";
import ImgIcon from "../../WeatherInfo/ImgIcon";
import AppTemp from "../../WeatherInfo/AppTemp";
const Weather = (props) => {
  const WeatherData = props.data;

  return (
    <Card>
      <div>
        <AppHeaderText>Weather App</AppHeaderText>
        <AppTemp WeatherData={WeatherData}></AppTemp>
        <ImgIcon WeatherData={WeatherData} />
        <Location WeatherData={WeatherData} />
        {/* <img src={sunrise}></img>
        <img src={wind}></img>
        <img src={pressure}></img>
        <img src={humidity1}></img> */}
        <h1>{Math.round((props.data.main.feels_like - 273.15) * 10) / 10}</h1>
        <h1>{props.data.main.humidity}</h1>
        <h1>{props.data.main.pressure}</h1>
        <h1>{props.data.wind.speed}</h1>
      </div>
    </Card>
  );
};

export default Weather;
