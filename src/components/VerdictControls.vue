<template lang="html">
  <v-card-actions>
    <v-btn
      class="mx-2"
      fab
      dark
      x-large
      color="secondary"
      @click="verdict(false)"
    >
      <v-icon dark color="accent">
        mdi-thumb-down
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn
      class="mx-2"
      fab
      dark
      x-large
      color="secondary"
      @click="verdict(weather)"
    >
      <v-icon dark color="accent">
        mdi-thumb-up
      </v-icon>
    </v-btn>
  </v-card-actions>
</template>

<script>
import verdict from '@/mixins/verdictMixin.js'
export default {
  mixins: [verdict],
  props: {
    weather: {
      type: Object
    }
  }
};
</script>

<style lang="css" scoped></style>
