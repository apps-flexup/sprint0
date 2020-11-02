// Action de base
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
    this.$repos.accountMenu
      .index()
      .then((data) => commit('setAccountMenu', data))
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
  getSettings({ commit }) {
    return this.$repos.settings.indexWithAccountId().then((data) => {
      commit('setSettings', data[0])
    })
  },
  updateSettings({ commit }, settings) {
    this.$repos.settings.update(settings).then((data) => {
      commit('setSettings', data)
    })
  }
}
