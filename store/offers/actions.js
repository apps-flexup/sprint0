// Action de base
export default {
  get({ commit }) {
    // charger les contrat-types
    this.$repos.offers.indexAccount().then((data) => commit('set', data))
  },
  clear({ commit }) {
    commit('set', [])
  }
}
