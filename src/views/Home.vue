<template>
  <div class="">
    <div class="title">
      <h1 class="accent--text mb-6 mt-6">
        Just a tinder-like app with openWeatherApi
      </h1>
      <!-- <v-icon color="accent mt-2" large> mdi-hand-peace-variant </v-icon> -->
      <img class="emoji" :src="emojiSrc" alt="">
    </div>
    <WeatherCard class="mt-6 mb-6" :weather="currentWeather" :VerdictControls="true">
      <VerdictControls :weather="currentWeather" />
    </WeatherCard>
  </div>
</template>

<script>
import store from "@/store/index.js";
import WeatherCard from "@/components/WeatherCard";
import VerdictControls from "@/components/VerdictControls";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      emojiSrc: "./victory-hand.png"
    }
  },
  components: {
    WeatherCard,
    VerdictControls
  },
  created() {
    store.dispatch("loadNewWeather");
  },
  updated() {
    if (store.state.weatherList.length < 5) {
      store.dispatch("loadNewWeather");
    }
  },
  computed: {
    ...mapState(["weatherList"]),
    ...mapGetters(["currentWeather"])
  }
};
</script>

<style lang="scss" scoped>
.emoji {
  width: 50px;
  height: 50px;
}
.title {
  text-align: center;
  h1 {
    line-height: 1.4;
  }
}
</style>
