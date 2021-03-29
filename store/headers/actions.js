// Action de base
export default {
  getContractHeaders({ commit }) {
    // charger les contrat-types
    this.$repos.contractHeaders
      .index()
      .then((data) => commit('setContractHeader', data))
  },
  getOrderLineHeaders({ commit }) {
    // charger les structures
    this.$repos.orderLineHeaders
      .index()
      .then((data) => commit('setOrderLineHeaders', data))
  }
}
