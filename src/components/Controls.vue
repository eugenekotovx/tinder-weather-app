<template lang="html">
  <v-card-actions>
    <v-btn class="mx-2" fab dark x-large color="secondary" @click="nextWeather(false)">
      <v-icon dark color="accent">
        mdi-thumb-down
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="mx-2" fab dark x-large color="secondary" @click="nextWeather(weather)">
      <v-icon dark color="accent">
        mdi-thumb-up
      </v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['nextWeather'])
  },
  props: {
    weather: {
      type: Object
    }
  }
};
</script>

<style lang="css" scoped></style>
