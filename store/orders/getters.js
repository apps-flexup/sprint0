// Action de base
export default {
  get({ commit }) {
    // charger les contrat-types
    this.$repos.orders.indexAccount().then((data) => commit('set', data))
  }
}
