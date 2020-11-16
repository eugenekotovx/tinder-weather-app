<template lang="html">
  <v-card
    elevation="12"
    color="secondary"
    class="mx-auto rounded-lg"
    max-width="400"
  >
    <v-card-title> {{ weather.name }}, {{ weather.sys.country}} </v-card-title>
    <v-card-subtitle> {{ weather.weather[0].description }} </v-card-subtitle>
    <v-card-text>
      <v-row align="center">
        <v-col
          class="display-3"
          cols="6"
        >
          <h6>{{ weather.main.temp + "°C"}}</h6>
        </v-col>
        <v-col cols="6">
          <v-img
          :src="
            'http://openweathermap.org/img/wn/' +
              weather.weather[0].icon +
              '@4x.png'
          "
            width="150"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  computed: {
    weather() {
      return this.$store.state.currentWeather;
    }
  }
};
</script>

<style lang="css" scoped></style>
