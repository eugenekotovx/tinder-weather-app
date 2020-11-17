<template>

    <WeatherCard class="mt-14" :weather="currentWeather">
      <Controls :weather="currentWeather" />
    </WeatherCard>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
import Controls from "@/components/Controls";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    WeatherCard,
    Controls
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
