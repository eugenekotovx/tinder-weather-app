<template>
  <WeatherCard class="mt-4" :weather="currentWeather" :VerdictControls="true">
    <VerdictControls :weather="currentWeather" />
  </WeatherCard>
</template>

<script>
import store from "@/store/index.js";
import WeatherCard from "@/components/WeatherCard";
import VerdictControls from "@/components/VerdictControls";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
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

<style lang="scss" scoped></style>
