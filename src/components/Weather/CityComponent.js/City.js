import React, { useState, useRef } from "react";
import Card from "../../Card/Card";
import classes from "./City.module.css";
import AppHeaderText from "../../WeatherInfo/AppHeaderText";
import logo from "../../../logo.svg";
import GeoButton from "../../geoLocation/geoButton";
const City = (props) => {
  const citySearch = useRef("");
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const city = citySearch.current.value;
    props.onSearchCity(city);
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
        <GeoButton />
      </div>
    </Card>
  );
};

export default City;
