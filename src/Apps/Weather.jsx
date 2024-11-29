import { useRef, useState } from "react";
import WeatherHeader from "../weatherComponents/Header/WeatherHeader";
import WeatherItem from "../weatherComponents/WeatherItem/WeatherItem";

export default function Weather() {
  const cityRef = useRef();
  const [city, setCity] = useState("");

  function handleCitySerach() {
    const cityName = cityRef.current.value;
    setCity(cityName);
    console.log(cityName);
  }

  return (
    <>
      <WeatherHeader
        handleCitySerach={handleCitySerach}
        cityRef={cityRef}
      ></WeatherHeader>
      <WeatherItem city={city}></WeatherItem>
    </>
  );
}
