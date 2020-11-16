<template>
  <div class="">
    {{ currentWeather.name}}
    {{ currentWeather.weather[0].description}}
    {{ currentWeather.main.feels_like}}
    <button @click="next">hot</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  mounted() {
    this.$store.dispatch("loadApp")

  },
  computed: {
    ...mapState(["weatherList", "currentWeather"])
  },
  methods: {
    next() {
      this.$store.dispatch('nextWeather')
    }
  }
};
</script>
