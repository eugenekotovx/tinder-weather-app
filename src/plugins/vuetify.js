import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.blueGrey.darken4,
        secondary: colors.blueGrey.darken3,
        background: colors.blueGrey.darken2,
        accent: colors.grey.lighten1
      },
      light: {
        primary: "#227C9D",
        secondary: "#FFEFBD",
        accent: "#FF5722",
        background: "#FEF9EF"
      }
    }
  }
});
