import React from "react";
const WeatherProp = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.title}</h1>
      <img src="../../assets/icons/pressure.svg" />
    </div>
  );
};

export default WeatherProp;
