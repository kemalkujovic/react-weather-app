import City from "./components/Weather/CityComponent.js/City";
import React, { useState } from "react";
import Weather from "./components/Weather/WeatherComponent/Weather";
import axios from "axios";
import GeoButton from "./components/geoLocation/geoButton";
function App() {
  const [weatherData, setWeatherData] = useState("");
  const fetchWeather = async (city) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81c012b926634fca41d6e3b2ad98d52b`
    );
    setWeatherData(response.data);
  };
  return (
    <div>
      {weatherData ? (
        <Weather data={weatherData} updateWeatherData={setWeatherData} />
      ) : (
        <City onSearchCity={fetchWeather} />
      )}
      <GeoButton></GeoButton>
    </div>
  );
}

export default App;
