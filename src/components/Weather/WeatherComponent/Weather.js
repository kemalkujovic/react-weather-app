import React from "react";
import Card from "../../Card/Card";
import AppHeaderText from "../../WeatherInfo/AppHeaderText";
import Location from "../../WeatherInfo/Location";
import AppTemp from "../../WeatherInfo/AppTemp";
import WeatherResults from "../../WeatherInfo/WeatherResults";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import classes from "./Weather.module.css";
const Weather = (props) => {
  const WeatherData = props.data;
  const submit = () => {
    props.updateWeatherData("");
  };
  return (
    <Card>
      <AppHeaderText>Weather App</AppHeaderText>
      <AppTemp WeatherData={WeatherData} />
      <Location WeatherData={WeatherData} />
      <WeatherResults WeatherData={WeatherData} />
      <ArrowBackIcon
        onClick={submit}
        className={classes.backBtn}
        style={{
          fontSize: "50px",
        }}
      />
    </Card>
  );
};

export default Weather;
