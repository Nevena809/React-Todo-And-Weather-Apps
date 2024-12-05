import { useContext, useEffect } from "react";
import WeatherContext from "../../store/WeatherContext";
import getWeatherIcon from "../../util/weatherIcon";
import classes from "./HourlyWeather.module.css";

export default function HourlyWeather() {
  const { fetchForecastHourlyWeather, hourlyDataWeather } =
    useContext(WeatherContext);
  console.log(hourlyDataWeather);

  useEffect(() => {
    fetchForecastHourlyWeather();
  }, []);

  if (!hourlyDataWeather) {
    return <p>Loading hourly weather...</p>;
  }

  const { description, icon, time, feelsLike, temp } = hourlyDataWeather;

  const weatherIcon = getWeatherIcon(icon);

  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <p>{description}</p>
        <p>Humidity: {time}%</p>
        <p className={classes.temperature}>
          {Math.round(temp)}°C / Feels like: {Math.round(feelsLike)}°C
        </p>
      </div>
      <div className={classes.icon}>{weatherIcon}</div>
    </div>
  );
}
