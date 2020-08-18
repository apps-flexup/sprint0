import getters from '@/store/settings/getters'
import mutations from '@/store/settings/mutations'
import state from '@/store/settings/state'

const moduleSettings = {
  namespaced: true,
  actions: {
    getMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-apps",
          "title": "menu.home",
          "to": "/"
        },
        {
          "active": true,
          "icon": "mdi-store-outline",
          "title": "menu.orders",
          "to": "/orders"
        },
        {
          "active": false,
          "icon": "mdi-briefcase-check",
          "title": "menu.contracts",
          "to": "/contracts"
        },
        {
          "active": true,
          "icon": "mdi-flask-empty",
          "title": "menu.products",
          "to": "/products"
        },
        {
          "active": true,
          "icon": "mdi-barcode",
          "title": "menu.offers",
          "to": "/offers"
        },
        {
          "active": true,
          "icon": "mdi-account-group",
          "title": "menu.contacts",
          "to": "/contacts"
        },
        {
          "active": true,
          "icon": "mdi-tag",
          "title": "menu.partners",
          "to": "/partners"
        },
        {
          "active": false,
          "icon": "mdi-file-document",
          "title": "menu.documents",
          "to": "/documents"
        },
        {
          "active": false,
          "icon": "mdi-desktop-mac-dashboard",
          "title": "menu.dashboard",
          "to": "/dashboard"
        }
      ]
      commit('setMenu', data)
    }
  },

  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleSettings