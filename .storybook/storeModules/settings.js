import getters from '@/store/settings/getters'
import mutations from '@/store/settings/mutations'
import state from '@/store/settings/state'

const moduleSettings = {
  namespaced: true,
  actions: {
    getMenu({ commit }) {
      const data = [
        {
          "active": false,
          "icon": "mdi-apps",
          "title": "menu.home",
          "to": "/"
        },
        {
          "active": false,
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
          "active": false,
          "icon": "mdi-flask-empty",
          "title": "menu.products",
          "to": "/products"
        },
        {
          "active": false,
          "icon": "mdi-barcode",
          "title": "menu.offers",
          "to": "/offers"
        },
        {
          "active": true,
          "icon": "mdi-email-outline",
          "title": "menu.contacts",
          "to": "###############"
        },
        {
          "active": false,
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
        },
        {
          "active": true,
          "icon": "mdi-cog-outline",
          "title": "menu.settings",
          "to": "#"
        }
      ]
      commit('setMenu', data)
    },
    getAccountMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-information-outline",
          "title": "accountMenu.information",
          "to": "#####"
        },
        {
          "active": true,
          "icon": "mdi-tune-vertical-variant",
          "title": "accountMenu.variant",
          "to": "/settings"
        },
        {
          "active": true,
          "icon": "mdi-account-group-outline",
          "title": "accountMenu.members",
          "to": "/partners"
        },
      ]
      commit('setAccountMenu', data)
    },
    getUserMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-account-circle-outline",
          "title": "userMenu.data",
          "to": "##"
        },
        {
          "active": true,
          "icon": "mdi-shield-lock-outline",
          "title": "userMenu.security",
          "to": "###"
        },
        {
          "active": true,
          "icon": "mdi-account-switch-outline",
          "title": "userMenu.management",
          "to": "####"
        }
      ]
      commit('setUserMenu', data)
    },
    getBuyerMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-magnify",
          "title": "buyerMenu.search",
          "to": "#######"
        },
        {
          "active": true,
          "icon": "mdi-inbox-arrow-down-outline",
          "title": "buyerMenu.orders",
          "to": "/orders"
        },
        {
          "active": true,
          "icon": "mdi-heart-outline",
          "title": "buyerMenu.favorite",
          "to": "########"
        },
        {
          "active": true,
          "icon": "mdi-map-marker-outline",
          "title": "buyerMenu.deliveries",
          "to": "#########"
        },
        {
          "active": true,
          "icon": "mdi-credit-card-multiple-outline",
          "title": "buyerMenu.payments",
          "to": "##########"
        },
      ]
      commit('setBuyerMenu', data)
    },
    getSellerMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-view-dashboard-outline",
          "title": "sellerMenu.dashboard",
          "to": "/dashboard"
        },
        {
          "active": true,
          "icon": "mdi-inbox-arrow-down-outline",
          "title": "buyerMenu.orders",
          "to": "/orders"
        },
        {
          "active": true,
          "icon": "mdi-package-variant-closed",
          "title": "sellerMenu.products",
          "to": "/products"
        },
        {
          "active": true,
          "icon": "mdi-tag-multiple-outline",
          "title": "sellerMenu.offers",
          "to": "/offers"
        },
        {
          "active": true,
          "icon": "mdi-map-marker-outline",
          "title": "buyerMenu.deliveries",
          "to": "#############"
        },
        {
          "active": true,
          "icon": "mdi-credit-card-multiple-outline",
          "title": "sellerMenu.payments",
          "to": "################"
        },
      ]
      commit('setSellerMenu', data)
    }
  },

  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleSettings
