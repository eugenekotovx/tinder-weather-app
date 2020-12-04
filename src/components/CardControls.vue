<template lang="html">
  <div class="">
    <div class="d-flex justify-center mb-5">
      <v-btn
        class="mx-2"
        fab
        dark
        x-large
        color="secondary"
        @click="addToFavorites"
      >
        <v-icon dark color="accent">
          {{ weather.favorite ? "mdi-star" : "mdi-star-outline" }}
        </v-icon>
      </v-btn>
      <v-btn
        class="mx-2"
        fab
        dark
        x-large
        color="secondary"
        @click="removeFromHistory"
      >
        <v-icon dark color="accent">
          mdi-delete
        </v-icon>
      </v-btn>
    </div>
    <div class="" v-if="!weather.comment">
      <v-textarea
        full-width
        single-line
        label="Why i like this weather?"
        outlined
        maxlength="140"
        counter
        :value="value"
        @input="inputValue"
        :v-bind="$attrs"
        v-model="comment"
      ></v-textarea>
      <v-btn color="primary" @click="addComment">
        add comment
      </v-btn>
    </div>
    <div v-else>
      <v-card color="primary">
        <v-toolbar
          flat
          color="secondary accent--text"
          class="mb-3"
          dark
          rounded
        >
          <v-toolbar-title>Why I like this weather:</v-toolbar-title>
        </v-toolbar>
        <v-card-text rounded class="rounded-lg border white--text">{{
          weather.comment
        }}</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import store from "@/store/index.js";
export default {
  props: {
    weather: {
      type: Object,
      required: true
    },
    value: [String, Number]
  },
  data() {
    return {
      comment: this.inputValue()
    };
  },
  methods: {
    removeFromHistory() {
      store.dispatch("removeFromLikedHistory", this.weather);
    },
    inputValue(event) {
      this.$emit("input", event);
    },
    addComment() {
      Vue.set(this.weather, "comment", this.comment);
      store.dispatch("addComment", this.weather, this.comment);
    },
    addToFavorites() {
      store.dispatch("addToFavorites", this.weather);
    }
  }
};
</script>

<style lang="css" scoped></style>
