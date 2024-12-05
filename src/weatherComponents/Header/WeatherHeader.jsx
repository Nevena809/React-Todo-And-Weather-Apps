import { useContext, useRef, useState } from "react";
import WeatherContext from "../../store/WeatherContext";
import classes from "./WeatherHeader.module.css";
import Button from "../UI/Button";
/* eslint-disable react/prop-types */

export default function WeatherHeader() {
  const { weather, fetchWeatherCity, fetchForecastWeatherCity, error } =
    useContext(WeatherContext);
  const [emptyInput, setEmptyInput] = useState(false);
  const cityRef = useRef();

  let content;

  function handleCitySerach() {
    const name = cityRef.current.value.trim();

    if (!name) {
      setEmptyInput(true);
      return;
    }
    setEmptyInput(false);
    fetchWeatherCity(name);
    fetchForecastWeatherCity(name);

    cityRef.current.value = "";
  }
  if (!weather) {
    return <p>Loading...</p>;
  }

  const { cityName, country } = weather;

  const handleFocus = () => {
    if (emptyInput) {
      setEmptyInput(false);
    }
  };

  const handleBlur = () => {
    if (!cityRef.current.value.trim()) {
      setEmptyInput(false);
    }
  };

  if (error) {
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
        <input
          type="text"
          className={emptyInput ? classes.error : classes.input}
          placeholder={emptyInput ? "Field can't be empty!" : ""}
          ref={cityRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <Button onClick={handleCitySerach}>Add</Button>
      </div>
    </div>
  );
}
