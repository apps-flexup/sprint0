// Action de base
export default {
  get({ commit }) {
    // charger les contracts
    this.$repos.contacts.indexWithAccountId().then((data) => commit('set', data))
  },
  clear({ commit }) {
    commit('set', [])
  }
}
