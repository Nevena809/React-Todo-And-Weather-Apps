import { FaCloud } from "react-icons/fa6";
// import { FaCloudShowersHeavy } from "react-icons/fa";

// export default function getWeatherIcon(weatherId) {
//   if (weatherId >= 200 && weatherId < 300) {
//     return "🌩";
//   } else if (weatherId >= 300 && weatherId < 400) {
//     return "🌦";
//   } else if (weatherId >= 500 && weatherId < 600) {
//     return <FaCloudShowersHeavy />;
//   } else if (weatherId >= 600 && weatherId < 700) {
//     return "🌨";
//   } else if (weatherId >= 700 && weatherId < 800) {
//     return "🌪";
//   } else if (weatherId === 800) {
//     return "☀️";
//   } else if (weatherId >= 800 && weatherId < 810) {
//     return <FaCloud></FaCloud>;
//   } else {
//     return "❓";
//   }
// }

export default function getWeatherIcon(weatherId) {
  if (weatherId === 1000) {
    return "☀️";
  } else if (weatherId === 1003 || weatherId === 1006) {
    return <FaCloud></FaCloud>;
  } else if (weatherId === 1009 || weatherId === 1030) {
    return "🌫️";
  } else if (
    weatherId === 1063 ||
    weatherId === 1066 ||
    weatherId === 1069 ||
    weatherId === 1072 ||
    weatherId === 1087
  ) {
    return "☔️";
  } else if (weatherId === 1114 || weatherId === 1117) {
    return "🌬";
  } else if (weatherId === 1135 || weatherId === 1147) {
    return "💨";
  } else if (
    weatherId === 1150 ||
    weatherId === 1153 ||
    weatherId === 1168 ||
    weatherId === 1171
  ) {
    return "🌧";
  } else if (
    weatherId === 1180 ||
    weatherId === 1183 ||
    weatherId === 1186 ||
    weatherId === 1189 ||
    weatherId === 1192 ||
    weatherId === 1195
  ) {
    return "🌦";
  } else if (weatherId === 1198 || weatherId === 1201) {
    return "🌦";
  } else if (weatherId === 1204 || weatherId === 1207) {
    return "🌦";
  } else if (
    weatherId === 1210 ||
    weatherId === 1213 ||
    weatherId === 1216 ||
    weatherId === 1219 ||
    weatherId === 1222 ||
    weatherId === 1225
  ) {
    return "🌨";
  } else if (weatherId === 1237) {
    return "❄️";
  } else if (weatherId === 1240 || weatherId === 1243 || weatherId === 1246) {
    return "🌨";
  } else if (weatherId === 1249 || weatherId === 1252) {
    return "⛄️";
  } else if (weatherId === 1255 || weatherId === 1258) {
    return "🌨";
  } else if (weatherId === 1261 || weatherId === 1264) {
    return "☃️";
  } else if (weatherId === 1273 || weatherId === 1276) {
    return "⛈";
  } else if (weatherId === 1279 || weatherId === 1282) {
    return "⛈";
  } else {
    return "❓";
  }
}
