import Vue from 'vue'
import Vuex from 'vuex'
import moduleCategories from './storeModules/categories'
import moduleCountries from './storeModules/countries'
import moduleCurrencies from './storeModules/currencies'
import moduleContracts from './storeModules/contracts'
import moduleHeaders from './storeModules/headers'
import moduleOffers from './storeModules/offers'
import moduleOrders from './storeModules/orders'
import modulePartners from './storeModules/partners'
import moduleProducts from './storeModules/products'
import moduleSettings from './storeModules/settings'
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
    orders: moduleOrders,
    partners: modulePartners,
    products: moduleProducts,
    settings: moduleSettings,
    units: moduleUnits
  }
})
export default store
