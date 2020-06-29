// Action de base
export default {
  get({ commit }) {
    // charger les contracts
    this.$repos.partners.index().then((data) => commit('set', data))
  }
}
