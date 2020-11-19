<template>
  <WeatherCard class="mt-4" :weather="currentWeather">
    <Controls :weather="currentWeather" />
  </WeatherCard>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
import Controls from "@/components/Controls";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    WeatherCard,
    Controls
  },
  mounted() {
    if (!this.$store.state.weatherList.length) {
      this.$store.dispatch("loadApp");
    }
  },
  computed: {
    ...mapState(["weatherList"]),
    ...mapGetters(["currentWeather"])
  },
  methods: {}
};
</script>
