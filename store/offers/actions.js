// Action de base
export default {
  get({ commit }) {
    // charger les contrat-types
    this.$repos.offers.indexAccount().then((data) => commit('set', data))
  },
  remove({ commit }, offer) {
    // charger les contracts
    this.$repos.offers.delete(offer.id).then(() => {
      commit('remove', offer)
    })
  },
  clear({ commit }) {
    commit('set', [])
  }
}
