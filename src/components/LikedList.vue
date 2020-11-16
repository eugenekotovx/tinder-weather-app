<template lang="html">
  <v-expansion-panels
    color="secondary"
    class="mx-auto rounded-lg"
    max-width="200"
  >
  <h3>Liked History:</h3>
    <v-expansion-panel v-for="likedWeather in likedList" :key="likedWeather.id">
      <v-expansion-panel-header>
        {{likedWeather.name}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <WeatherCard :weather="likedWeather" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
export default {
  components: {
    WeatherCard
  },
  props: {
    likedList: {
      type: Array
    }
  }
};
</script>

<style lang="css" scoped></style>
