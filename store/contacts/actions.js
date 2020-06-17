// Action de base
export default {
  get({ commit }) {
    // charger les contracts
    this.$repos.contacts.index().then((data) => commit('set', data))
  }
}
