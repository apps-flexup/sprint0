// Action de base
export default {
  getOrderItemHeaders({ commit }) {
    // charger les structures
    this.$repos.orderItemHeaders.index().then((data) => commit('setOrderItemHeaders', data))
  }
}
