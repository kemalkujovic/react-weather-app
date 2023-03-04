import React from "react";
import Card from "../../Card/Card";
import AppHeaderText from "../../WeatherInfo/AppHeaderText";
import Location from "../../WeatherInfo/Location";
import ImgIcon from "../../WeatherInfo/ImgIcon";
import AppTemp from "../../WeatherInfo/AppTemp";
import WeatherResults from "../../WeatherInfo/WeatherResults";
const Weather = (props) => {
  const WeatherData = props.data;
  return (
    <Card>
      <div>
        <AppHeaderText>Weather App</AppHeaderText>
        <AppTemp WeatherData={WeatherData}></AppTemp>
        <ImgIcon WeatherData={WeatherData} />
        <Location WeatherData={WeatherData} />
        <WeatherResults />
      </div>
    </Card>
  );
};

export default Weather;
