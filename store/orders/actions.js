// Action de base
export default {
  get({ commit }) {
    // charger les contrat-types
    this.$repos.orders.indexWithAccountId().then((data) => commit('set', data))
  },
  add({ commit }, order) {
    console.log('Order to add: ', order)
  }
}
