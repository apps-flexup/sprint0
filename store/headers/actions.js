// Action de base
export default {
  getOrderLineHeaders({ commit }) {
    // charger les structures
    this.$repos.orderLineHeaders
      .index()
      .then((data) => commit('setOrderLineHeaders', data))
  }
}
