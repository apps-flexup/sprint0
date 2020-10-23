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
          "icon": "mdi-store-outline",
          "title": "manageMenu.orders",
          "to": "/orders"
        },
        {
          "active": true,
          "icon": "mdi-briefcase-check",
          "title": "manageMenu.contracts",
          "to": "/contracts"
        },
        {
          "active": true,
          "icon": "mdi-flask-empty",
          "title": "manageMenu.products",
          "to": "/products"
        },
        {
          "active": true,
          "icon": "mdi-barcode",
          "title": "manageMenu.offers",
          "to": "/offers"
        },
        {
          "active": true,
          "icon": "mdi-email-outline",
          "title": "manageMenu.contacts",
          "to": "###############"
        },
        {
          "active": true,
          "icon": "mdi-tag",
          "title": "manageMenu.partners",
          "to": "/partners"
        },
        {
          "active": false,
          "icon": "mdi-file-document",
          "title": "manageMenu.documents",
          "to": "/documents"
        },
        {
          "active": false,
          "icon": "mdi-desktop-mac-dashboard",
          "title": "manageMenu.dashboard",
          "to": "/dashboard"
        },
        {
          "active": true,
          "icon": "mdi-cog-outline",
          "title": "manageMenu.settings",
          "to": "#"
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
