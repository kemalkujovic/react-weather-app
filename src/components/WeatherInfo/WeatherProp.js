import React from "react";
const WeatherProp = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src="icons/rain.svg"></img>
    </div>
  );
};

export default WeatherProp;
