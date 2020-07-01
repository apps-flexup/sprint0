import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
// import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Vuex from 'vuex'
import FvUnitInput from './index.vue'

const storeMockedUp = new Vuex.Store({})

storiesOf('Ref/Input/Currency', module)
  .add('As a component', () => ({
    components: { FvUnitInput },
    store: storeMockedUp,
    template: '<FvUnitInput />',
    methods: {
      // -- set your component's prop function
      logout: action('Déconnexion')
    }
  }))
  .add('Non connecté', () => ({
    components: { FvUnitInput },
    store: storeMockedUp,
    template: '<FvUnitInput />',
    methods: {
      // -- set your component's prop function
      login: action('Connexion')
    }
  }))
