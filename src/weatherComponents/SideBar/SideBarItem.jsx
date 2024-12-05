import getWeatherIcon from "../../util/weatherIcon";
import classes from "./SideBarItem.module.css";
/* eslint-disable react/prop-types */

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default function SideBarItem({ weather }) {
  if (!weather) {
    return;
  }

  const { description, maxTemperature, minTemperature, day, icon } = weather;

  const date = new Date(day);
  const dayOfWeek = daysOfWeek[date.getDay()];

  const weatherIcon = getWeatherIcon(icon);

  return (
    <li className={classes.info}>
      <p className={classes.day}>{dayOfWeek}</p>
      <p className={classes.icon}>{weatherIcon}</p>
      <p className={classes.description}>{description}</p>
      <p className={classes.temperature}>
        {Math.round(maxTemperature)}/{Math.round(minTemperature)}
      </p>
    </li>
  );
}
