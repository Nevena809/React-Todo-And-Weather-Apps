import { useContext, useEffect } from "react";
import classes from "./WeatherItem.module.css";
import WeatherContext from "../../store/WeatherContext";
import getWeatherIcon from "../../util/weatherIcon";
import Error from "../UI/Error";
/* eslint-disable react/prop-types */

export default function WeatherItem() {
  const { fetchCurrentWeather, fetchWeatherCity, weather, error } =
    useContext(WeatherContext);

  useEffect(() => {
    fetchCurrentWeather();
  }, []);

  useEffect(() => {
    fetchWeatherCity();
  }, []);

  if (!weather) {
    return <p>Loading...</p>;
  }

  const { description, temperature, humidity, id } = weather;
  const { cityName } = weather;

  const weatherIcon = getWeatherIcon(id);

  let content;

  if (error) {
    content = (
      <Error
        title="City doesn't found!"
        message="Enter a valid city name."
      ></Error>
    );
  } else {
    content = (
      <div className={classes.container}>
        <div className={classes.info}>
          <p>{description}</p>
          <p>Humidity: {humidity}%</p>
          <p className={classes.temperature}>
            {(temperature - 273.15).toFixed()}°C
          </p>
        </div>
        <div className={classes.icon}>{weatherIcon}</div>
      </div>
    );
  }

  return <>{content}</>;
}
