import React from "react";
const WeatherProp = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.src}></img>
    </div>
  );
};

export default WeatherProp;
