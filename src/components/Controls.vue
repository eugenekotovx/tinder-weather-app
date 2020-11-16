<template lang="html">
  <v-card-actions>
    <v-btn class="mx-2" fab dark x-large color="primary" @click="nextWeather(false)">
      <v-icon dark>
        mdi-thumb-down
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn class="mx-2" fab dark x-large color="primary" @click="nextWeather(weather)">
      <v-icon dark>
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
