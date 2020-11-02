import getters from '@/store/settings/getters'
import mutations from '@/store/settings/mutations'
import state from '@/store/settings/state'

const moduleSettings = {
  namespaced: true,
  actions: {
    getManageMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-apps",
          "title": "manageMenu.home",
          "to": "/"
        },
        {
          "active": true,
          "icon": "mdi-inbox-arrow-down-outline",
          "title": "manageMenu.orders",
          "to": "/orders"
        },
        {
          "active": true,
          "icon": "mdi-file-document-multiple-outline",
          "title": "manageMenu.contracts",
          "to": "/contracts"
        },
        {
          "active": true,
          "icon": "mdi-package-variant-closed",
          "title": "manageMenu.products",
          "to": "/products"
        },
        {
          "active": true,
          "icon": "mdi-tag-multiple-outline",
          "title": "manageMenu.offers",
          "to": "/offers"
        },
        {
          "active": true,
          "icon": "mdi-email-outline",
          "title": "manageMenu.contacts",
          "to": "/contacts"
        },
        {
          "active": true,
          "icon": "mdi-city-variant-outline",
          "title": "manageMenu.partners",
          "to": "/partners"
        },
        {
          "active": true,
          "icon": "mdi-file-document",
          "title": "manageMenu.documents",
          "to": "/documents"
        },
        {
          "active": true,
          "icon": "mdi-desktop-mac-dashboard",
          "title": "manageMenu.dashboard",
          "to": "/dashboard"
        },
        {
          "active": true,
          "icon": "mdi-cog-outline",
          "title": "manageMenu.settings",
          "to": "/parameters"
        }
      ]
      commit('setManageMenu', data)
    },
    getAccountMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-information-outline",
          "title": "accountMenu.information",
          "to": "/information"
        },
        {
          "active": true,
          "icon": "mdi-tune-vertical-variant",
          "title": "accountMenu.settings",
          "to": "/settings"
        },
        {
          "active": true,
          "icon": "mdi-account-group-outline",
          "title": "accountMenu.members",
          "to": "/members"
        },
        {
          "active": true,
          "icon": "mdi-map-marker-outline",
          "title": "buyerMenu.deliveries",
          "to": "/adresses"
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
          "to": "/data"
        },
        {
          "active": true,
          "icon": "mdi-shield-lock-outline",
          "title": "userMenu.security",
          "to": "/security"
        },
        {
          "active": true,
          "icon": "mdi-account-switch-outline",
          "title": "userMenu.management",
          "to": "/management"
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
          "to": "/search"
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
          "to": "/favorite"
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
          "title": "sellerMenu.orders",
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
          "icon": "mdi-truck-fast-outline",
          "title": "buyerMenu.deliveries",
          "to": "/deliveries"
        },
        {
          "active": true,
          "icon": "mdi-credit-card-multiple-outline",
          "title": "sellerMenu.payments",
          "to": "/paiments"
        },
      ]
      commit('setSellerMenu', data)
    },
    getGlobalMenu({ commit }) {
      const data = [
        {
          "active": true,
          "icon": "mdi-help-circle-outline",
          "title": "globalMenu.question",
          "to": "/question"
        },
        {
          "active": true,
          "icon": "mdi-email-outline",
          "title": "globalMenu.contact",
          "to": "/contact"
        }
      ]
      commit('setGlobalMenu', data)
    },
  },

  getters: getters,
  mutations: mutations,
  state: state
}
export default moduleSettings
