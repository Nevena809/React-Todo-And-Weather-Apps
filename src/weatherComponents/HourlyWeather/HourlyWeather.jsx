import { useContext, useEffect } from "react";
import WeatherContext from "../../store/WeatherContext";
import getWeatherIcon from "../../util/weatherIcon";
import classes from "./HourlyWeather.module.css";

export default function HourlyWeather() {
  const { fetchForecastHourlyWeather, hourlyWeather, error } =
    useContext(WeatherContext);

  useEffect(() => {
    fetchForecastHourlyWeather();
  }, []);

  if (!hourlyWeather || hourlyWeather.length === 0) {
    return <p>Loading hourly weather...</p>;
  }

  const formatTime = (time) => {
    const date = new Date(time);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${hours}:${minutes < 10 ? "0" : ""}${minutes} ${ampm}`;
  };

  return (
    <>
      {!error && (
        <div className={classes.container}>
          {hourlyWeather.map((hour, index) => {
            const { icon, time, feelsLike, temp } = hour;

            const weatherIcon = getWeatherIcon(icon);
            const formattedTime = formatTime(time);

            return (
              <div key={index} className={classes.card}>
                <div className={classes.info}>
                  <p>{formattedTime}</p>
                  <div className={classes.icon}>{weatherIcon}</div>
                  <p className={classes.temperature}>
                    {Math.round(temp)}°C / {Math.round(feelsLike)}°C
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
