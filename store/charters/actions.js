// Action de base
export default {
  get({ dispatch }) {
    dispatch('charters/getCharters', {}, { root: true })
  },
  clear({ commit }) {
    commit('set', [])
  },
  getCharters({ commit }) {
    // charger les chartres
    this.$repos.charters.indexWithAccountId().then((data) => commit('set', data))
  }
}
