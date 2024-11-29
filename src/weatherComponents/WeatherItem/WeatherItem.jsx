import { useEffect, useState } from "react";
import classes from "./WeatherItem.module.css";
import { FaCloud } from "react-icons/fa";
/* eslint-disable react/prop-types */

const apiKey = "146ebbd2e0e3372876138c9ed29fc9d5";

export default function WeatherItem({ city }) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!city) {
      return;
    }
    async function fetchData() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        console.error("Error fetching weather data:", response.status);
      }
    }

    fetchData();
  }, [city]);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  const { weather, main } = weatherData;
  const description = weather[0].description || "Unknown";
  const temperature = main.temp - 273.15;
  const humidity = main.humidity;

  return (
    <>
      <div className={classes.container}>
        <div className={classes.info}>
          <p>{description}</p>
          <p>Humidity: {humidity}</p>
          <p className={classes.temperature}>{temperature}°C</p>
        </div>
        <div className={classes.icon}>
          <FaCloud size={100} />
        </div>
      </div>
    </>
  );
}
