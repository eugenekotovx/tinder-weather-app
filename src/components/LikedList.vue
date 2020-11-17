<template lang="html">
  <v-expansion-panels
    color="secondary"
    class="mx-auto rounded-lg xs"
  >
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
