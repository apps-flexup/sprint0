import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
// import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import Vuex from 'vuex'
import FvCurrencyInput from './index.vue'

const storeMockedUp = new Vuex.Store({})
//   accounts: {
//     namespaced: true,
//     getters: {
//       all() {
//         return {
//           country_id: 77,
//           id: 1,
//           name: 'fred',
//           offers_count: 0,
//           params: {},
//           parent_id: null,
//           roles: ['customer', 'supplier'],
//           roles_methods: null,
//           supplier: false,
//           user_id: 1
//         },
//         {
//           country_id: 77,
//           id: 2,
//           name: 'fabrizio',
//           offers_count: 7,
//           params: {},
//           parent_id: null,
//           roles: ['customer'],
//           roles_methods: null,
//           supplier: false,
//           user_id: 2
//         }
//       }
//     }
//   }
// })

storiesOf('Ref/Input/Currency', module)
  .add('As a component', () => ({
    components: { FvCurrencyInput },
    store: storeMockedUp,
    template: '<FvCurrencyInput />',
    methods: {
      // -- set your component's prop function
      logout: action('Déconnexion')
    }
  }))
  .add('Non connecté', () => ({
    components: { FvCurrencyInput },
    store: storeMockedUp,
    template: '<FvCurrencyInput />',
    methods: {
      // -- set your component's prop function
      login: action('Connexion')
    }
  }))
