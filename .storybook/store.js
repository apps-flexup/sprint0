import Vue from 'vue'
import Vuex from 'vuex'
import moduleCategories from './storeModules/categories'

Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    categories: moduleCategories
  }
})
export default store
