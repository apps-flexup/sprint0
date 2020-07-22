import Vue from 'vue'
import Vuex from 'vuex'
import Vuetify, { VApp } from 'vuetify/lib';
import { configure, addDecorator, addParameters } from '@storybook/vue'
import { withKnobs } from '@storybook/addon-knobs'
import { withInfo } from 'storybook-addon-vue-info'
import { action } from '@storybook/addon-actions'
import { withA11y } from "@storybook/addon-a11y";

// -- in the event that you are using vuex, this line adds it as a dependency to vue
Vue.use(Vuex)
Vue.use(Vuetify)
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

// -- adds vuetify
addDecorator(() => ({
  vuetify: new Vuetify(),
  components: { VApp },
  template: `
    <v-app>
      <div>
          <story/>
      </div>
    </v-app>
  `,
}))

addDecorator(withA11y);

// -- tells storybook where to look for stories
configure(function () {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}, module)
