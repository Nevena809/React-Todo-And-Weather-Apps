import { createContext, useState } from "react";
/* eslint-disable react/prop-types */

// const apiKey = "146ebbd2e0e3372876138c9ed29fc9d5";
// const url = "https://api.openweathermap.org/data/2.5/weather?";

const apiKey = "e3e92acc7bec4db3a1f132107240312";
const url = "http://api.weatherapi.com/v1/";

const WeatherContext = createContext({
  weather: [],
  fetchCurrentWeather: () => {},
  fetchWeatherCity: () => {},
  fetchForecastWeather: () => {},
});

export function WeatherContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(false);

  async function fetchCurrentWeather() {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const response = await fetch(
      // `${url}lat=${latitude}&lon=${longitude}&appid=${apiKey}`
      `${url}current.json?key=${apiKey}&q=${latitude},${longitude}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      setWeatherData((prevState) => [
        {
          ...prevState,
          description: data.current.condition.text,
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          icon: data.current.condition.code,
          cityName: data.location.name,
          country: data.location.country,
        },
      ]);

      // setWeatherData({
      //   description: data.weather[0].description,
      //   temperature: data.main.temp,
      //   humidity: data.main.humidity,
      //   id: data.weather[0].id,
      //   cityName: data.name,
      //   country: data.sys.country,
      // });
    } else {
      setError(error || "Something went wrong!");
    }
  }

  async function fetchWeatherCity(city) {
    if (!city) {
      return;
    } else {
      setError(false);
    }

    // const response = await fetch(`${url}q=${city}&appid=${apiKey}`);
    const response = await fetch(`${url}current.json?key=${apiKey}&q=${city}`);
    if (response.ok) {
      const data = await response.json();

      setWeatherData((prevState) => [
        {
          ...prevState,
          description: data.current.condition.text,
          temperature: data.current.temp_c,
          humidity: data.current.humidity,
          icon: data.current.condition.code,
          cityName: data.location.name,
          country: data.location.country,
        },
      ]);
    } else {
      setError(error || "Something went wrong!");
    }
  }

  async function fetchForecastWeather() {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const response = await fetch(
      `${url}forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=3`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      setWeatherData((prevState) => [
        {
          ...prevState,
          description: data.current.condition.text,
          maxTemperature: data.forecast.forecastday[0].day.maxtemp_c,
          minTemperature: data.forecast.forecastday[0].day.mintemp_c,
          day: data.forecast.forecastday[0].date,
          icon: data.current.condition.code,
        },
      ]);
    } else {
      setError(error || "Something went wrong!");
    }
  }

  const weatherCtx = {
    weather: weatherData,
    error,
    fetchCurrentWeather,
    fetchWeatherCity,
    fetchForecastWeather,
  };

  return (
    <WeatherContext.Provider value={weatherCtx}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
