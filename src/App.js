import City from "./components/Weather/CityComponent.js/City";
import React, { useState } from "react";
import Weather from "./components/Weather/WeatherComponent/Weather";
import axios from "axios";
function App() {
  const [value, setValue] = useState("");
  const fetchWeather = async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81c012b926634fca41d6e3b2ad98d52b`
    );
    setValue(response.data);
  };
  return (
    <div>{value ? <Weather /> : <City onSearchCity={fetchWeather} />}</div>
  );
}

export default App;
