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
      state.weatherList.shift();
    },
    ADD_TO_LIKED(state, weather) {
      state.likedHistory.push(weather);
    },
    UPD_VERDICT(state, verdict) {
      state.lastVerdict = verdict;
    },
    REMOVE_FROM_LIKED_HISTORY(state, weatherFromLikedList) {
      state.likedHistory.splice(weatherFromLikedList, 1);
    },
    UPD_HISTORY(state, weather) {
      let weatherInHistory = state.likedHistory.indexOf(weather);
      Vue.set(state.likedHistory, weatherInHistory, weather);
    }
  },
  actions: {
    setWeather({ commit }, weather) {
      Vue.set(weather, "comment", "");
      commit("SET_WEATHER", weather);
    },
    nextWeather({ commit }, weather) {
      if (weather) {
        commit("ADD_TO_LIKED", weather);
        commit("UPD_VERDICT", true);
      } else {
        commit("UPD_VERDICT", false);
      }
    },
    addToLiked({ commit }, weather) {
      commit("ADD_TO_LIKED", weather);
    },
    refreshVerdict({ commit }) {
      commit("UPD_VERDICT", "");
      commit("NEXT_WEATHER");
    },
    loadNewWeather({ dispatch }) {
      WeatherApi.getWeather()
        .then(data => {
          dispatch("setWeather", data.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
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
        return state.weatherList[0];
      } else {
        return false;
      }
    }
  }
});
