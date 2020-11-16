import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import WeatherApi from "@/service/WeatherApiService.js";
export default new Vuex.Store({
  state: {
    currentWeather: {},
    weatherList: []
  },
  mutations: {
    SET_WEATHER(state, weather) {
      state.weatherList.push(weather);
    },
    SET_CURRENT_WEATHER(state) {
      state.currentWeather = state.weatherList[0];
    },
    NEXT_WEATHER(state) {
      state.weatherList.shift()
    }
  },
  actions: {
    setWeather({ commit }, weather) {
      commit("SET_WEATHER", weather);
    },
    setCurrentWeather({ commit }) {
      commit("SET_CURRENT_WEATHER");
    },
    async loadApp({ dispatch}) {
      await dispatch('loadWeatherList')
      dispatch('setCurrentWeather')
    },
    nextWeather({dispatch, commit}) {
      commit("NEXT_WEATHER")
      commit("SET_CURRENT_WEATHER")
      dispatch("loadNewWeather")
    },
    loadNewWeather({dispatch}) {
      WeatherApi.getWeather()
        .then(data => {
          console.log(data.data)
          dispatch("setWeather", data.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    async loadWeatherList({ dispatch }) {
      for (let i = 0; i < 5; i++) {
        await WeatherApi.getWeather()
          .then(data => {
            console.log(data.data)
            dispatch("setWeather", data.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
      return
    }
  },
  modules: {}
});
