// Action de base
export default {
  get({ commit }) {
    // charger les contrat-types
    this.$repos.orders.indexWithAccountId().then((data) => commit('set', data))
  },
  add({ commit }, order) {
    if (Object.prototype.hasOwnProperty.call(order, 'id')) {
      this.$repos.orders.update(order).then((res) => {
        commit('remove', res)
        commit('add', res)
      })
    } else {
      this.$repos.orders.createWithAccountId(order).then((res) => {
        commit('add', res)
      })
    }
  },
  send({ commit }, id) {
    console.log('ID', id)
    const res = this.$axios.$post(`https://serverless-api.ou-et-quand.workers.dev/api/orders/${id}/PENDING`)
    console.log('RESULTAT', res)
  }
}
