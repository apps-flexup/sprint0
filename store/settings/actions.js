// Action de base
export default {
  get({ commit }) {
    this.$repos.menus.index().then((data) => commit('set', data))
  },
  getMenu({ commit }) {
    this.$repos.menu.index().then((data) => commit('setMenu', data))
  },
  getSettings({ commit }) {
    this.$repos.settings.index().then((data) => commit('setSettings', data))
  },
  updateSettings({ commit }, settings) {
    this.$repos.settings.update(settings).then((data) => {
      commit('removeSetting', data)
      commit('addSetting', data)
    })
  }
}
