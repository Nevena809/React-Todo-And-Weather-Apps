import WeatherHeader from "../weatherComponents/Header/WeatherHeader";
import WeatherItem from "../weatherComponents/WeatherItem/WeatherItem";
import { WeatherContextProvider } from "../store/WeatherContext";
import SideBar from "../weatherComponents/SideBar/SideBar";
import classes from "./Weather.module.css";
import HourlyWeather from "../weatherComponents/HourlyWeather/HourlyWeather";

export default function Weather() {
  return (
    <WeatherContextProvider>
      <WeatherHeader />
      <div className={classes.container}>
        <div className={classes.weatherItem}>
          <WeatherItem />
        </div>
        <div className={classes.sidebar}>
          <SideBar />
        </div>
      </div>
      <HourlyWeather></HourlyWeather>
    </WeatherContextProvider>
  );
}
