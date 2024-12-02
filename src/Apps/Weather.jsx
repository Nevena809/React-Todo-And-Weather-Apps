import WeatherHeader from "../weatherComponents/Header/WeatherHeader";
import WeatherItem from "../weatherComponents/WeatherItem/WeatherItem";
import { WeatherContextProvider } from "../store/WeatherContext";

export default function Weather() {
  return (
    <WeatherContextProvider>
      <WeatherHeader></WeatherHeader>
      <WeatherItem></WeatherItem>
    </WeatherContextProvider>
  );
}
