import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#607d8b",
        secondary: "#795548",
        accent: "#cddc39",
        error: "#f44336",
        warning: "#ffc107",
        info: "#00bcd4",
        success: "#8bc34a",
      },
    },
  },
  //   theme: {

  //   },
});
