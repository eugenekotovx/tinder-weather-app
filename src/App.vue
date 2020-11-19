<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-item-group class="d-flex align-center white--text">
        Theme:
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          hide-details
          :append-icon="
            $vuetify.theme.dark ? 'mdi-weather-pouring' : 'mdi-weather-hazy'
          "
          color="accent"
          class="mr-4 ml-4"
          :label="$vuetify.theme.dark ? 'rainy' : 'sunny'"
        />
      </v-item-group>
      <v-spacer></v-spacer>
      <v-item-group class="d-flex">
        <router-link tag="div" :to="{ path: '/' }">
          <v-btn class="accent--text secondary mr-10">
            <v-icon class="mr-4">mdi-home</v-icon> home
          </v-btn>
        </router-link>
        <router-link tag="div" :to="{ path: '/liked' }">
          <v-btn class="accent--text secondary"
            ><v-icon class="mr-4">mdi-heart</v-icon> liked
          </v-btn>
        </router-link>
      </v-item-group>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  },
  data: () => ({
    //
  })
};
</script>

<style media="screen">
.theme--dark.v-application {
  background-color: var(--v-background-base, #455a64) !important;
}
.theme--light.v-application {
  background-color: var(--v-background-base, #FFFACC) !important;
}
</style>
