// Action de base
export default {
  get({ commit }) {
    // charger les contrat-types
    this.$repos.offers.indexWithAccountId().then((data) => {
      commit('set', data)
    })
  },
  getAll({ commit }) {
    // charger les contrat-types
    this.$repos.offers.index().then((data) => commit('setAll', data))
  },
  remove({ commit }, offer) {
    // charger les contracts
    this.$repos.offers.delete(offer.id).then(() => {
      commit('remove', offer)
    })
  },
  clear({ commit }) {
    commit('set', [])
  },
  add({ commit }, offer) {
    if (Object.prototype.hasOwnProperty.call(offer, 'id')) {
      this.$repos.offers.update(offer).then((res) => {
        commit('update', res)
      })
    } else {
      this.$repos.offers.createWithAccountId(offer).then((res) => {
        commit('add', res)
      })
    }
  }
}
