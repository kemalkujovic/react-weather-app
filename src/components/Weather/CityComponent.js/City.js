import React, { useState, useRef } from "react";
import Card from "../../Card/Card";
import logo from "../../../assets/icons/perfect-day.svg";
import classes from "./City.module.css";
import AppHeaderText from "../../WeatherInfo/AppHeaderText";
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
        <h5 className={classes["search-name"]}>Find Weather of your city</h5>
      </div>
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
    </Card>
  );
};

export default City;
