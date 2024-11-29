import classes from "./WeatherHeader.module.css";
/* eslint-disable react/prop-types */

export default function WeatherHeader({ handleCitySerach, cityRef }) {
  return (
    <div className={classes.header}>
      <h1>Weather App</h1>
      <div className={classes.container}>
        <input type="text" className={classes.input} ref={cityRef} />
        <button onClick={handleCitySerach} className={classes.button}>
          Add
        </button>
      </div>
    </div>
  );
}
