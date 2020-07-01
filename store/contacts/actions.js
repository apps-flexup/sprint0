// Action de base
export default {
  get({ commit }) {
    // charger les contracts
    this.$repos.contacts.indexAccount().then((data) => commit('set', data))
  }
}
