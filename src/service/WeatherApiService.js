import axios from "axios";
import cities from "cities.json";
import getRandomInt from "@/helpers/helpers.js";

const apiKey = "3946ccfbd734fa06e00d0ba21ac89d28";

const weatherApi = axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5`,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000
});

const randomCity = () => {
  //get a random city index
  let num = getRandomInt(128769);
  // get a random city name by a random index from cities.json
  return cities[num].name;
};

export default {
  getWeather() {
    return (
      weatherApi
        // get cities from api using random name
        .get("/weather?q=" + randomCity() + "&units=metric&appid=" + apiKey)
        .then(data => {
          return data;
        })
        .catch(error => {
          // Often the cities do not coincide by name from mock api, so we make a request again
          if (error.response.status == 404) {
            return weatherApi
              .get(
                "/weather?q=" + randomCity() + "&units=metric&appid=" + apiKey
              )
              .then(data => {
                return data;
              });
          } else {
            console.log(error.response);
          }
        })
    );
  }
};
