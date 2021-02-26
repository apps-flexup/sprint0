// Action de base
export default {
  get({ commit }) {
    this.$repos.paymentStructures.index().then((data) => commit('set', data))
  },
  add({ commit }, paymentStructure) {
    if (Object.prototype.hasOwnProperty.call(paymentStructure, 'id')) {
      this.$repos.paymentStructures.update(paymentStructure).then((res) => {
        commit('remove', res)
        commit('add', res)
      })
    } else {
      this.$repos.paymentStructures
        .createWithAccountId(paymentStructure)
        .then((res) => {
          commit('add', res)
        })
    }
  }
}
