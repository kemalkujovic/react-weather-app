import React, { useState, useRef } from "react";
import Card from "../../Card/Card";
import logo from "../../../assets/icons/perfect-day.svg";
import classes from "./City.module.css";
const City = (props) => {
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredCity = cityInputRef.current.value;
    console.log(enteredCity);
  };
  return (
    <Card>
      <div>
        <h5>React Weather App</h5>
        <img src={logo} className={classes.logo} />
        <h5 className={classes["search-name"]}>Find Weather of your city</h5>
      </div>
      <form onSubmit={confirmHandler} className={classes.form}>
        <input
          className={classes.input}
          type="text"
          id="city"
          name="city"
          placeholder="Search for city..."
          ref={cityInputRef}
        />
        <button className={classes.button}>Search</button>
      </form>
    </Card>
  );
};

export default City;
