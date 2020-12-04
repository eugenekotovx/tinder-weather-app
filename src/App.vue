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
          <v-btn
            class="accent--text secondary"
            :class="!$vuetify.breakpoint.xs ? 'mr-4' : 'mr-2'"
          >
            <v-icon>mdi-home</v-icon>
            <v-item v-if="!$vuetify.breakpoint.xs" class="ml-4">
              <span>Home</span>
            </v-item>
          </v-btn>
        </router-link>
        <router-link tag="div" :to="{ path: '/liked' }">
          <v-btn class="accent--text secondary"
            ><v-icon>mdi-heart</v-icon>
            <v-item v-if="!$vuetify.breakpoint.xs" class="ml-4">
              <span>Liked</span></v-item
            >
          </v-btn>
        </router-link>
      </v-item-group>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <template>
      <v-footer color="primary" padless>
        <v-row justify="end" no-gutters>
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
            href="https://github.com/eugenekotovx"
          >
            <v-icon large>
              mdi-github
            </v-icon>
          </v-btn>
          <v-btn
            color="white"
            text
            rounded
            class="my-2"
            href="mailto:mrkev2112x@gmail.com"
          >
            <v-icon large> mdi-gmail </v-icon>
          </v-btn>
          <span class="title my-2 mx-2 white--text"> <h4>Eugene Kotov</h4></span>
        </v-row>
      </v-footer>
    </template>
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
  }
};
</script>

<style media="screen">
.theme--dark.v-application {
  background-color: var(--v-background-base, #455a64) !important;
}
.theme--light.v-application {
  background-color: var(--v-background-base, #fffacc) !important;
}
</style>
