<template>
  <v-main>
    <WeatherCard :weather="currentWeather" />
  </v-main>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    WeatherCard
  },
  mounted() {
    this.$store.dispatch("loadApp");
  },
  computed: {
    ...mapState(["weatherList", "currentWeather"])
  },
  methods: {}
};
</script>
