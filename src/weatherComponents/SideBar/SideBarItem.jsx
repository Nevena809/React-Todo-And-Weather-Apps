import { useContext, useEffect } from "react";
import WeatherContext from "../../store/WeatherContext";
import getWeatherIcon from "../../util/weatherIcon";
import classes from "./SideBarItem.module.css";
/* eslint-disable react/prop-types */

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export default function SideBarItem({ weather }) {
  const { fetchForecastWeather } = useContext(WeatherContext);

  useEffect(() => {
    fetchForecastWeather();
  }, []);

  if (!weather) {
    return;
  }

  const { description, maxTemperature, minTemperature, day, icon } = weather;

  const date = new Date(day);
  const dayOfWeek = daysOfWeek[date.getDay()];

  const weatherIcon = getWeatherIcon(icon);
  return (
    <div className={classes.info}>
      <p className={classes.day}>{dayOfWeek}</p>
      <p className={classes.icon}>{weatherIcon}</p>
      <p className={classes.description}>{description}</p>
      <p className={classes.temperature}>
        {Math.round(maxTemperature)}/{Math.round(minTemperature)}
      </p>
    </div>
  );
}
