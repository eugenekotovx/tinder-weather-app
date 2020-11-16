import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import WeatherApi from "@/service/WeatherApiService.js";
export default new Vuex.Store({
  state: {
    currentWeather: false,
    weatherList: [],
    likedHistory: []
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
    },
    ADD_TO_LIKED(state, weather) {
      state.likedHistory.push(weather)
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
    async nextWeather({dispatch, commit}, weather) {
      await commit("NEXT_WEATHER")
      await commit("SET_CURRENT_WEATHER")
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
  modules: {}
});
