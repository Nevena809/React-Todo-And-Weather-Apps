import { useContext, useEffect } from "react";
import classes from "./SideBar.module.css";
import WeatherContext from "../../store/WeatherContext";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const {
    weatherForcast,
    fetchForecastWeather,
    fetchForecastWeatherCity,
    error,
  } = useContext(WeatherContext);

  useEffect(() => {
    fetchForecastWeather();
  }, []);

  useEffect(() => {
    fetchForecastWeatherCity();
  }, []);

  return (
    <>
      {!error && (
        <ul className={classes.container}>
          {weatherForcast?.map((item) => (
            <SideBarItem key={item.day} weather={item} />
          ))}
        </ul>
      )}
    </>
  );
}
