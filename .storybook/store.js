import Vue from 'vue'
import Vuex from 'vuex'
import moduleCategories from './storeModules/categories'
import moduleCountries from './storeModules/countries'
import moduleCurrencies from './storeModules/currencies'
import moduleContracts from './storeModules/contracts'
import moduleHeaders from './storeModules/headers'
import moduleOffers from './storeModules/offers'
import moduleProducts from './storeModules/products'
import moduleUnits from './storeModules/units'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    categories: moduleCategories,
    countries: moduleCountries,
    currencies: moduleCurrencies,
    contracts: moduleContracts,
    headers: moduleHeaders,
    offers: moduleOffers,
    products: moduleProducts,
    units: moduleUnits
  }
})
export default store
