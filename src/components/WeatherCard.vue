<template lang="html">
  <v-card
    fluid
    elevation="12"
    color="primary"
    class="mx-auto rounded-lg"
    max-width="400"
    width="100%"
    v-hammer:swipe="swipeEvent"
    :class="checkTheLastVerdict"
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
      <template v-if="lastVerdict === true">
        <h1 class="green--text verdict like">
          LIKE
        </h1>
      </template>
      <template v-else-if="lastVerdict === false">
        <h1 class="red--text verdict dislike">
          DISLIKE
        </h1>
      </template>
      <v-card-title class="white--text">
        {{ weather.name }}, {{ weather.sys.country }}
      </v-card-title>
      <v-card-subtitle class="white--text">
        {{ weather.weather[0].description }}
      </v-card-subtitle>
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
          <v-icon color="white"> mdi-weather-windy</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="white--text">
          {{ weather.wind.speed + " m/s" }} -
          {{ weather.wind.deg + " deg" }}</v-list-item-subtitle
        >
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon color="white">mdi-cloud-download</v-icon>
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
import { mapState } from "vuex"
import lastVerdictMixin from "@/mixins/lastVerdictMixin";
import verdict from "@/mixins/verdictMixin.js";
export default {
  props: {
    weather: {
      type: [Object, Boolean],
      required: true
    },
    VerdictControls: {
      type: Boolean,
      default: false
    }
  },
  mixins: [lastVerdictMixin, verdict],
  methods: {
    swipeEvent(params) {
      if (this.VerdictControls == true) {
        if (params.direction === 4) {
          this.verdict(this.weather);
        } else if (params.direction === 2) {
          this.verdict(false);
        }
      }
    }
  },
  computed: {
    ...mapState(['lastVerdict'])
  }
};
</script>

<style lang="scss" scoped>
.like {
  border: 10px green solid;
}
.dislike {
  border: 10px red solid;
}
.weather {
  cursor: pointer;
  opacity: 1;
  &--false {
    transform: translate3d(-500px, 100px, 0);
    transition: all 0.5s ease-in;
    opacity: 0;
  }
  &--true {
    transform: translate3d(500px, -100px, 0);
    transition: all 0.5s ease-in;
    opacity: 0;
  }
}
.verdict {
  position: absolute;
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  text-align: center;
  top: 25%;
  font-size: 50px;
  z-index: 1;
}
</style>
