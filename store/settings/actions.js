// Action de base
export default {
  get({ commit }) {
    this.$repos.menus.index().then((data) => commit('set', data))
  },
  getMenu({ commit }) {
    this.$repos.menu.index().then((data) => commit('setMenu', data))
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
