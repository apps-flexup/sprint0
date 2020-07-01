// Action de base
export default {
  get({ dispatch }) {
    dispatch('charters/getCharters', {}, { root: true })
  },
  getCharters({ commit }) {
    // charger les chartres
    this.$repos.charters.indexAccount().then((data) => commit('set', data))
  }
}
