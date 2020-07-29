import Vue from 'vue'
import Vuex from 'vuex'
import moduleCategories from './storeModules/categories'
import moduleCountries from './storeModules/countries'
import moduleCurrencies from './storeModules/currencies'
import moduleContracts from './storeModules/contracts'
import moduleOffers from './storeModules/offers'
import moduleUnits from './storeModules/units'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    categories: moduleCategories,
    countries: moduleCountries,
    currencies: moduleCurrencies,
    contracts: moduleContracts,
    offers: moduleOffers,
    units: moduleUnits
  }
})
export default store
