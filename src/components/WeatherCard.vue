<template lang="html">
  <v-card
    elevation="12"
    color="primary"
    class="mx-auto rounded-lg"
    max-width="400"
  >
    <template v-if="weather == false">
      <v-sheet
        :style="{ background: $vuetify.theme.themes.dark.background }"
        class="pa-3"
      >
        <v-skeleton-loader
          class="mx-auto rounded-lg"
          max-width="400"
          color="secondary"
          type="card"
        >
        </v-skeleton-loader>
      </v-sheet>
    </template>
    <template v-else>
      <v-card-title class="white--text">
        {{ weather.name }}, {{ weather.sys.country }}
      </v-card-title>
      <v-card-subtitle class="white--text"> {{ weather.weather[0].description }} </v-card-subtitle>
      <v-card-text>
        <v-row align="center">
          <v-col class="display-3 text-center" cols="6">
            <h6 class="white--text">{{ weather.main.temp + "°C" }}</h6>
            <v-card-subtitle class="white--text">
              {{ "Feels like: " + weather.main.feels_like + "°C" }}
            </v-card-subtitle>
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

      <v-list-item>
        <v-list-item-icon>
          <v-icon> mdi-weather-windy</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="white--text">
          {{ weather.wind.speed + " m/s" }} -
          {{ weather.wind.deg + " deg" }}</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="white--text">
          {{ weather.main.humidity + " %" }}</v-list-item-subtitle
        >
      </v-list-item>
      <slot></slot>
    </template>
  </v-card>
</template>

<script>
export default {
  props: {
    weather: {
      type: [Object, Boolean],
      required: true
    }
  }
};
</script>

<style lang="css" scoped></style>
