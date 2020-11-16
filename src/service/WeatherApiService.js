import axios from "axios";
import cities from 'cities.json';
const apiKey = '3946ccfbd734fa06e00d0ba21ac89d28'

const weatherApi = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomCity = () => {
  let num = getRandomInt(128769)
  return cities[num].name
}

export default {
  getWeather() {
    return weatherApi.get('/weather?q=' + randomCity() + '&appid=' + apiKey)
    .then(data => {
      return data
    })
    .catch(error => {
      console.log(error)
    })
  }
};
