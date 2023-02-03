import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                background: colors.grey.lighten4,
            }
        },
        // dark: false,
        options: {
            customProperties: true
        },
    },
});
