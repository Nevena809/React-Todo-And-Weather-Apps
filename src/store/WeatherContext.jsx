import { createContext, useState } from "react";

const apiKey = "146ebbd2e0e3372876138c9ed29fc9d5";
const url = "https://api.openweathermap.org/data/2.5/weather?";

const WeatherContext = createContext({
  weather: [],
  fetchCurrentWeather: () => {},
  fetchWeatherCity: () => {},
});

export function WeatherContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState();

  async function fetchCurrentWeather() {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const response = await fetch(
      `${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      setWeatherData({
        description: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        id: data.weather[0].id,
        cityName: data.name,
        country: data.sys.country,
      });
    } else {
      setError(error || "Something went wrong!");
    }
  }

  async function fetchWeatherCity(city) {
    if (!city) {
      return;
    }
    // else if (city === "") {
    //   return setError(error || "Something went wrong!");
    // }
    const response = await fetch(`${url}q=${city}&appid=${apiKey}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      setWeatherData({
        description: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        id: data.weather[0].id,
        cityName: data.name,
        country: data.sys.country,
      });
    } else {
      setError(error || "Something went wrong!");
    }
  }

  const weatherCtx = {
    weather: weatherData,
    error,
    fetchCurrentWeather,
    fetchWeatherCity,
  };

  return (
    <WeatherContext.Provider value={weatherCtx}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
