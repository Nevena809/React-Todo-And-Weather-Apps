import { useContext, useRef, useState } from "react";
import WeatherContext from "../../store/WeatherContext";
import classes from "./WeatherHeader.module.css";
// import Error from "../UI/Error";
/* eslint-disable react/prop-types */

export default function WeatherHeader() {
  const { weather, fetchWeatherCity, error } = useContext(WeatherContext);
  const [emptyInput, setEmptyInput] = useState(false);
  const cityRef = useRef();
  let content;

  function handleCitySerach() {
    const name = cityRef.current.value.trim();

    if (!name) {
      console.log("empty");

      setEmptyInput(true);
      console.log(name);
    }
    fetchWeatherCity(name);
    // console.log(name);
  }
  if (!weather) {
    return;
  }

  const { cityName, country } = weather;

  if (error && emptyInput) {
    content = <h1>Not Found</h1>;
  } else {
    content = (
      <h1>
        {cityName}, {country}
      </h1>
    );
  }

  return (
    <div className={classes.header}>
      {content}
      <div className={classes.container}>
        <input type="text" className={classes.input} ref={cityRef} />
        <button onClick={handleCitySerach} className={classes.button}>
          Add
        </button>
      </div>
    </div>
  );
}
