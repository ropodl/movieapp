import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        // customVariables: ["@/src/assets/variables.scss"],
        treeshake: true,
        options: { customProperties: true },
        themes: {
            dark: {
                primary: "#C33737",           
                // colors.blue.darken2,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3
              }
        }
    }
});
