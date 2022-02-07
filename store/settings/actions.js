// Action de base
import { deepDiff } from '~/plugins/utils'

export default {
  get({ commit }) {
    this.$repos.menus.index().then((data) => commit('set', data))
  },
  getManageMenu({ commit }) {
    this.$repos.manageMenu.index().then((data) => commit('setManageMenu', data))
  },
  getUserMenu({ commit }) {
    this.$repos.userMenu.index().then((data) => commit('setUserMenu', data))
  },
  getAccountMenu({ commit }) {
    return this.$repos.accountMenu.index().then((data) => commit('setAccountMenu', data))
  },
  getBuyerMenu({ commit }) {
    this.$repos.buyerMenu.index().then((data) => commit('setBuyerMenu', data))
  },
  getSellerMenu({ commit }) {
    this.$repos.sellerMenu.index().then((data) => commit('setSellerMenu', data))
  },
  getGlobalMenu({ commit }) {
    this.$repos.globalMenu.index().then((data) => commit('setGlobalMenu', data))
  },
  getSellerNavBar({ commit }) {
    this.$repos.sellerNavBar.index().then((data) => commit('setSellerNavBar', data))
  },
  getManageNavBar({ commit }) {
    this.$repos.manageNavBar.index().then((data) => commit('setManageNavBar', data))
  },
  getSettings({ commit }) {
    return this.$repos.settings.indexWithAccountId().then((data) => {
      commit('setSettings', data[0])
    })
  },
  getDefaultSettings({ commit }) {
    return this.$repos.settings
      .show(0)
      .then((data) => {
        commit('setDefaultSettings', data)
      })
      .catch((err) => {
        console.log('ERREUR: ', err)
      })
  },
  updateSettings({ commit, state }, settings) {
    const defaultSettings = state.defaultSettings
    const payload = deepDiff(defaultSettings, settings)
    this.$repos.settings.update(payload).then((data) => {
      commit('setSettings', data)
    })
  },
  createSettings({ commit }, settings) {
    this.$repos.settings.createWithAccountId(settings).then((data) => {
      commit('setSettings', data)
    })
  },
}
