import React from "react";
const GeoButton = (props) => {
  const getCurrentPositionHandler = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(succesFull, onError);
    } else {
      alert("Your browser not support Geo api");
    }
  };
  const succesFull = async () => {
    console.log("da");
  };
  const onError = () => {};
  return (
    <button onClick={getCurrentPositionHandler}>get current Position</button>
  );
};

export default GeoButton;
