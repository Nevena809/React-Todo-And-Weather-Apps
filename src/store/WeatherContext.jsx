import { createContext, useState } from "react";
/* eslint-disable react/prop-types */

// const apiKey = "146ebbd2e0e3372876138c9ed29fc9d5";
// const url = "https://api.openweathermap.org/data/2.5/weather?";

const apiKey = "e3e92acc7bec4db3a1f132107240312";
const url = "http://api.weatherapi.com/v1/";

const WeatherContext = createContext({
  weather: null,
  weatherForcast: [],
  hourlyWeather: [],
  fetchCurrentWeather: () => {},
  fetchWeatherCity: () => {},
  fetchForecastWeather: () => {},
  fetchForecastWeatherCity: () => {},
  fetchForecastHourlyWeather: () => {},
  fetchForecastHourlyWeatherCity: () => {},
});

export function WeatherContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);
  const [weatherDataForcast, setWeatherDataForcast] = useState([]);
  const [hourlyDataWeather, setHourlyDataWeather] = useState([]);

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

      setWeatherData({
        description: data.current.condition.text,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        icon: data.current.condition.code,
        cityName: data.location.name,
        country: data.location.country,
      });

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

      setWeatherData({
        description: data.current.condition.text,
        temperature: data.current.temp_c,
        humidity: data.current.humidity,
        icon: data.current.condition.code,
        cityName: data.location.name,
        country: data.location.country,
      });
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

      // for (let i = 0; i < data.forecast.forecastday.length; i++) {
      //   const forecastData = data.forecast.forecastday[i];

      //   setWeatherDataForcast((prevState) => [
      //     ...prevState,
      //     {
      //       description: data.current.condition.text,
      //       maxTemperature: forecastData.day.maxtemp_c,
      //       minTemperature: forecastData.day.mintemp_c,
      //       day: forecastData.date,
      //       icon: data.current.condition.code,
      //     },
      //   ]);
      // }
      const forecastData = data.forecast.forecastday.map((forecastDay) => ({
        description: data.current.condition.text,
        maxTemperature: forecastDay.day.maxtemp_c,
        minTemperature: forecastDay.day.mintemp_c,
        day: forecastDay.date,
        icon: data.current.condition.code,
      }));

      setWeatherDataForcast(forecastData);
    } else {
      setError(error || "Something went wrong!");
    }
  }

  async function fetchForecastWeatherCity(city) {
    if (!city) {
      return;
    } else {
      setError(false);
    }
    const response = await fetch(
      `${url}forecast.json?key=${apiKey}&q=${city}&days=3`
    );
    if (response.ok) {
      const data = await response.json();

      const forecastData = data.forecast.forecastday.map((forecastDay) => ({
        description: data.current.condition.text,
        maxTemperature: forecastDay.day.maxtemp_c,
        minTemperature: forecastDay.day.mintemp_c,
        day: forecastDay.date,
        icon: data.current.condition.code,
      }));

      setWeatherDataForcast(forecastData);
    } else {
      setError(error || "Something went wrong!");
    }
  }

  async function fetchForecastHourlyWeather() {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const response = await fetch(
      `${url}forecast.json?key=${apiKey}&q=${latitude},${longitude}&days=1`
    );
    if (response.ok) {
      const data = await response.json();

      const hourlyData = data.forecast.forecastday[0]?.hour;

      const filteredHourlyData = hourlyData
        ?.filter((_, index) => index % 2 === 0)
        .map((hour) => ({
          description: hour.condition.text,
          icon: hour.condition.code,
          time: hour.time,
          temp: hour.temp_c,
          feelsLike: hour.feelslike_c,
          humidity: hour.humidity,
        }));

      setHourlyDataWeather(filteredHourlyData);

      console.log(filteredHourlyData);
    } else {
      setError(error || "Something went wrong!");
    }
  }

  async function fetchForecastHourlyWeatherCity(city) {
    const response = await fetch(
      `${url}forecast.json?key=${apiKey}&q=${city}&days=1`
    );
    if (response.ok) {
      const data = await response.json();

      const hourlyData = data.forecast.forecastday[0]?.hour;

      const filteredHourlyData = hourlyData
        ?.filter((_, index) => index % 2 === 0)
        .map((hour) => ({
          description: hour.condition.text,
          icon: hour.condition.code,
          time: hour.time,
          temp: hour.temp_c,
          feelsLike: hour.feelslike_c,
          humidity: hour.humidity,
        }));

      setHourlyDataWeather(filteredHourlyData);

      console.log(filteredHourlyData);
    } else {
      setError(error || "Something went wrong!");
    }
  }

  const weatherCtx = {
    weather: weatherData,
    weatherForcast: weatherDataForcast,
    hourlyWeather: hourlyDataWeather,
    error,
    fetchCurrentWeather,
    fetchWeatherCity,
    fetchForecastWeather,
    fetchForecastWeatherCity,
    fetchForecastHourlyWeather,
    fetchForecastHourlyWeatherCity,
  };

  return (
    <WeatherContext.Provider value={weatherCtx}>
      {children}
    </WeatherContext.Provider>
  );
}

export default WeatherContext;
