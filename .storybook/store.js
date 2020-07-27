import Vue from 'vue'
import Vuex from 'vuex'
import moduleCategories from './storeModules/categories'
import moduleCountries from './storeModules/countries'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    categories: moduleCategories,
    countries: moduleCountries
  }
})
export default store
