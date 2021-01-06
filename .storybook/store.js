import Vue from 'vue'
import Vuex from 'vuex'
import moduleAccounts from './storeModules/accounts'
import moduleCategories from './storeModules/categories'
import moduleCountries from './storeModules/countries'
import moduleCurrencies from './storeModules/currencies'
import moduleContracts from './storeModules/contracts'
import moduleForms from './storeModules/forms'
import moduleHeaders from './storeModules/headers'
import moduleOffers from './storeModules/offers'
import moduleOrders from './storeModules/orders'
import moduleThirdPartyAccounts from './storeModules/thirdPartyAccounts'
import moduleProducts from './storeModules/products'
import moduleSettings from './storeModules/settings'
import moduleUnits from './storeModules/units'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    accounts: moduleAccounts,
    categories: moduleCategories,
    countries: moduleCountries,
    currencies: moduleCurrencies,
    contracts: moduleContracts,
    forms: moduleForms,
    headers: moduleHeaders,
    offers: moduleOffers,
    orders: moduleOrders,
    thirdPartyAccounts: moduleThirdPartyAccounts,
    products: moduleProducts,
    settings: moduleSettings,
    units: moduleUnits
  }
})
export default store
