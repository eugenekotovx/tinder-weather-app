import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import WeatherApi from "@/service/WeatherApiService.js";
export default new Vuex.Store({
  state: {
    weatherList: [],
    likedHistory: [],
    lastVerdict: ""
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
    UPD_VERDICT(state, verdict) {
      state.lastVerdict = verdict;
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
    refreshVerdict({ commit }) {
      commit("UPD_VERDICT", "");
      commit("NEXT_WEATHER");
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
    removeFromLikedHistory({ state, commit }, weather) {
      let weatherFromLikedList = state.likedHistory.indexOf(weather);
      commit("REMOVE_FROM_LIKED_HISTORY", weatherFromLikedList);
    },
    addComment({ commit }, weather) {
      commit("UPD_HISTORY", weather);
    },
    addToFavorites({ commit }, weather) {
      if (!weather.favorite) {
        Vue.set(weather, "favorite", true);
      } else if (weather.favorite == true) {
        Vue.set(weather, "favorite", false);
      }
      commit("UPD_HISTORY", weather);
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
