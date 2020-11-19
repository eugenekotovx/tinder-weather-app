<template lang="html">
  <v-expansion-panels class="d-flex flex-column align-center">
    <h1 class="mb-4 mt-4 accent--text">Liked History:</h1>
    <v-expansion-panel
      v-for="likedWeather in likedList"
      :key="likedWeather.id"
      class="rounded-lg"
    >
      <v-expansion-panel-header color="primary">
       <h3 :class="$vuetify.theme.dark ? 'accent--text' : 'secondary--text'"> {{ likedWeather.name }} </h3>
      </v-expansion-panel-header>
      <v-expansion-panel-content color="secondary">
        <WeatherCard class="mt-10 mb-10" :weather="likedWeather" />
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

<style lang="scss" scoped>
.v-expansion-panel {
  max-width: 800px;
  width: 100%;
}
</style>
