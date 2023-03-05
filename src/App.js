import City from "./components/Weather/CityComponent.js/City";
import React, { useState } from "react";
import Weather from "./components/Weather/WeatherComponent/Weather";
import axios from "axios";
function App() {
  const [weatherData, setWeatherData] = useState("");
  const [httpError, setHttpError] = useState(false);
  const fetchWeather = async (city) => {
    try {
      setHttpError(false);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81c012b926634fca41d6e3b2ad98d52b`
      );
      setWeatherData(response.data);
    } catch (error) {
      setHttpError(true);
    }
  };

  return (
    <div>
      {weatherData ? (
        <Weather data={weatherData} updateWeatherData={setWeatherData} />
      ) : (
        <City
          error={httpError}
          onSearchCity={fetchWeather}
          onGeo={setWeatherData}
        />
      )}
    </div>
  );
}

export default App;
