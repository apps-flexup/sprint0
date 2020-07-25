import Vue from 'vue'
import Vuex from 'vuex'
import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import { withA11y } from "@storybook/addon-a11y";
import Vuetify from 'vuetify'
import { VApp, VContainer, VBtn, VAutocomplete } from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.css';
import VueI18n from 'vue-i18n'
import '~/plugins/globalcomponents'

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
    VAutocomplete
  }
}

Vue.use(Vuetify)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr: require('@/lang/fr.json'),
    en: require('@/lang/en.json')
  }
})

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

// -- in the event that you are using vuex, this line adds it as a dependency to vue
Vue.use(Vuex)
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

import theme from "./theme.js";
addParameters({
  options: {
    theme,
    sortStoriesByKind: true,
  },
});

// -- adds the info tab to your story
addDecorator(withInfo)
// -- adds the knob tab to your story, this allows you to play around with your component
addDecorator(withKnobs)

addDecorator(withA11y);

// -- tells storybook where to look for stories
configure(function () {
  const req = require.context('../components/', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}, module)
