// Action de base
export default {
  get({ commit }) {
    this.$repos.paymentStructures.index().then((data) => commit('set', data))
  }
}
