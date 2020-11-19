import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import WeatherApi from "@/service/WeatherApiService.js";
export default new Vuex.Store({
  state: {
    weatherList: [],
    likedHistory: [],
  },
  mutations: {
    SET_WEATHER(state, weather) {
      state.weatherList.push(weather);
    },
    NEXT_WEATHER(state) {
      state.weatherList.shift()
    },
    ADD_TO_LIKED(state, weather) {
      state.likedHistory.push(weather)
    },
  },
  actions: {
    setWeather({ commit }, weather) {
      commit("SET_WEATHER", weather);
    },
    async loadApp({ dispatch}) {
      await dispatch('loadWeatherList')
    },
    async nextWeather({dispatch, commit}, weather) {
      await commit("NEXT_WEATHER")
      await dispatch("loadNewWeather")
      if (weather) {
       await commit("ADD_TO_LIKED", weather)
      }
    },
    addToLiked({commit}, weather) {
      commit("ADD_TO_LIKED", weather)
    },
    async loadNewWeather({dispatch}) {
      await WeatherApi.getWeather()
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
  modules: {},
  getters: {
    currentWeather: state => {
      if (state.weatherList.length) {
        return state.weatherList[0]
      } else {
        return false
      }
    }
  }
});
