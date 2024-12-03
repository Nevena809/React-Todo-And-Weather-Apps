import WeatherHeader from "../weatherComponents/Header/WeatherHeader";
import WeatherItem from "../weatherComponents/WeatherItem/WeatherItem";
import { WeatherContextProvider } from "../store/WeatherContext";
import SideBar from "../weatherComponents/SideBar/SideBar";
import classes from "./Weather.module.css";

export default function Weather() {
  return (
    <WeatherContextProvider>
      <WeatherHeader />
      <div className={classes.container}>
        <WeatherItem />
        <SideBar />
      </div>
    </WeatherContextProvider>
  );
}
