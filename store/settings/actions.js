// Action de base
export default {
  get({ commit }) {
    this.$repos.menus.index().then((data) => commit('set', data))
  },
  getMenu({ commit }) {
    this.$repos.menu.index().then((data) => commit('setMenu', data))
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
  }
}
