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
  }
}
