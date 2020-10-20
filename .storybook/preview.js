import Vue from 'vue'
import AsyncComputed from 'vue-async-computed'
import { addDecorator, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Vuetify from 'vuetify'
import { VApp, VContainer, VBtn, VAutocomplete, VTextField } from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.css';
import i18n from '~/.storybook/i18n'
import '~/plugins/globalcomponents'
import '~/plugins/directives'
import activeAccount from '~/.storybook/activeAccount'
import store from '~/.storybook/store'
import axios from 'axios'
import auth from '~/.storybook/auth'
import "@mdi/font/css/materialdesignicons.css"
import "@/.storybook/style/application_wrap.css"
import "@/.storybook/style/icon_margin.css"

Vue.use(AsyncComputed)

const vuetifyOptions = {
  theme: {
    customVariables: ['~/assets/variables.scss'],
    dark: false,
    themes: {
      dark: {
        primary: colors.blue.darken2,
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber.base,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
      }
    }
  },
  components: {
    VApp,
    VContainer,
    VBtn,
    VAutocomplete,
    VTextField
  }
}

Vue.use(Vuetify)

addDecorator(() => ({
  vuetify: new Vuetify(vuetifyOptions),
  i18n,
  template: `
  <v-app>
    <v-main>
      <story/>
    </v-main>
  </v-app>`
}))

// -- removes all productionTip logs from the console when running storybook
Vue.config.productionTip = false
// -- overrides nuxt-link native functionality in order to avoid navigating to an actual page
Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      action('link target')(this.to)
    },
  },
  template: 'NuxtLink',
})

addParameters({
  options: {
    sortStoriesByKind: true,
  }
});

// -- adds the knob tab to your story, this allows you to play around with your component
addDecorator(withKnobs)

Vue.prototype.$store = store
Vue.prototype.$activeAccount = activeAccount
Vue.prototype.$axios = axios
Vue.prototype.$auth = auth
