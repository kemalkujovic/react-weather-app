import React from "react";
import classes from "./geoLocation.module.css";
import axios from "axios";
const GeoButton = (props) => {
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
    console.log(response);
  };
  const onError = () => {
    console.log("Greska");
  };
  return (
    <>
      <div className={classes.separetor}></div>
      <button className={classes.geoBtn} onClick={getCurrentPositionHandler}>
        Get Current Location
      </button>
    </>
  );
};

export default GeoButton;
