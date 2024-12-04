import { useContext } from "react";
import classes from "./SideBar.module.css";
import WeatherContext from "../../store/WeatherContext";
import SideBarItem from "./SideBarItem";

export default function SideBar() {
  const { weather } = useContext(WeatherContext);

  if (!weather || weather.length === 0) {
    return <p>No weather data available.</p>;
  }

  return (
    <ul className={classes.container}>
      {weather.map((item) => (
        <SideBarItem key={item.code} weather={item} />
      ))}
    </ul>
  );
}
