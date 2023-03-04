import React, { useState, useRef } from "react";
import Card from "../../Card/Card";
import classes from "./City.module.css";
import AppHeaderText from "../../WeatherInfo/AppHeaderText";
import logo from "../../../logo.svg";
import axios from "axios";
const City = (props) => {
  const citySearch = useRef("");
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const city = citySearch.current.value;
    props.onSearchCity(city);
  };

  const getCurrentPositionHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(succesFull, onError);
    } else {
      alert("Your browser not support Geo api");
    }
  };

  const succesFull = async (position) => {
    const { latitude, longitude } = position.coords;
    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=81c012b926634fca41d6e3b2ad98d52b`;
    const response = await axios.get(api);
    props.onGeo(response.data);
  };
  const onError = () => {
    console.log("Greska");
  };

  return (
    <Card>
      <div>
        <AppHeaderText>React Weather App</AppHeaderText>
        <img src={logo} className={classes.logo} />
        <h1 className={classes["search-name"]}>Find Weather of your city</h1>
      </div>
      <div className={classes.form}>
        <form onSubmit={onSubmitHandler}>
          <input
            className={classes.input}
            type="text"
            id="city"
            name="city"
            placeholder="Search for city..."
            ref={citySearch}
          />
          <button className={classes.button}>Search</button>
        </form>
        <div className={classes.separetor}></div>
        <button className={classes.geoBtn} onClick={getCurrentPositionHandler}>
          Get Current Location
        </button>
      </div>
    </Card>
  );
};

export default City;
