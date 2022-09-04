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
  async send({ commit }, id) {
    console.log('ID', id)
    const res = await fetch(`${process.env.API_BASE}/api/orders/${id}/PENDING`, {
      method: 'POST',
      'Content-Type': 'application/json'
    }).then((res) => res.json())
    commit('remove', res)
    commit('add', res)
    console.log('RESULTAT', res)
  }
}
