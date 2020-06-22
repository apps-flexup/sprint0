// Action de base
export default {
  get({ commit }) {
    // charger les contracts
    this.$repos.accounts.index().then((data) => commit('set', data))
  }
}
