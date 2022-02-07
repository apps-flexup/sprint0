// Action de base
export default {
  get({ commit }) {
    // charger les produits
    this.$repos.paymentConditions.indexWithAccountId().then((data) => commit('set', data))
  },
  clear({ commit }) {
    commit('set', [])
  },
  remove({ commit }, paymentCondition) {
    // charger les contracts
    this.$repos.paymentConditions.delete(paymentCondition.id).then(() => commit('remove', paymentCondition))
  },
  add({ commit }, paymentCondition) {
    // charger les contracts
    if (Object.prototype.hasOwnProperty.call(paymentCondition, 'id')) {
      this.$repos.paymentConditions.update(paymentCondition).then((res) => {
        commit('remove', res)
        commit('add', res)
      })
    } else {
      this.$repos.paymentConditions.createWithAccountId(paymentCondition).then((res) => {
        commit('add', res)
      })
    }
  },
}
