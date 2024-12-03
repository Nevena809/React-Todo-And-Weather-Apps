import classes from "./SideBar.module.css";

const key = "e3e92acc7bec4db3a1f132107240312";
const latitude = 40.7142;
const longitude = -74.0064;

async function fetchWeatherCity() {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${key}&q=new york&lat=${latitude}&lon=${longitude}`
  );

  const data = await response.json();
  console.log(data);

  //   setWeatherData({
  //     description: data.weather[0].description,
  //     temperature: data.main.temp,
  //     humidity: data.main.humidity,
  //     id: data.weather[0].id,
  //     cityName: data.name,
  //     country: data.sys.country,
  //   });
}

fetchWeatherCity();

export default function SideBar() {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <p>Today</p>
        <p>☀️</p>
        <p className={classes.temperature}>Sunny</p>
        <p className={classes.icon}>36/22</p>
      </div>
    </div>
  );
}
