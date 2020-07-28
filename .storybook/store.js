import Vue from 'vue'
import Vuex from 'vuex'
import moduleCategories from './storeModules/categories'
import moduleCountries from './storeModules/countries'
import moduleCurrencies from './storeModules/currencies'
import moduleContracts from './storeModules/contracts'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    categories: moduleCategories,
    countries: moduleCountries,
    currencies: moduleCurrencies,
    contracts: moduleContracts
  }
})
export default store
