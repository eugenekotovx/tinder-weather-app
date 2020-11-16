import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: colors.grey.darken3,
        secondary: colors.blueGrey.darken4,
        background: colors.blueGrey.darken3,
      }
    }
   }
});
