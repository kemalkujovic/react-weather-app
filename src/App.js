import City from "./components/Weather/CityComponent.js/City";
import React, { useState, useEffect } from "react";
import Weather from "./components/Weather/WeatherComponent/Weather";
import axios from "axios";
function App() {
  const [city, setCity] = useState("");
  const [weather, updateWeather] = useState();
  const fetchWeather = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81c012b926634fca41d6e3b2ad98d52b`
    );
    updateWeather(response.data);
  };
  return <div>{weather ? <Weather /> : <City fetch={fetchWeather} />}</div>;
}

export default App;
