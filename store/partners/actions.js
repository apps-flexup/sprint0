// Action de base
export default {
  get({ commit }) {
    // charger les contracts
    this.$repos.partners
      .indexWithAccountId()
      .then((data) => commit('set', data))
  },
  getAll({ commit }) {
    this.$repos.partners.index().then((data) => {
      commit('setAll', data)
    })
  },
  clear({ commit }) {
    commit('set', [])
  },
  remove({ commit }, partner) {
    this.$repos.partners
      .delete(partner.id)
      .then(() => commit('remove', partner))
  },
  add({ commit }, partner) {
    if (Object.prototype.hasOwnProperty.call(partner, 'id')) {
      this.$repos.partners.update(partner).then((res) => {
        commit('remove', res)
        commit('add', res)
      })
    } else {
      this.$repos.partners.createWithAccountId(partner).then((res) => {
        commit('add', res)
      })
    }
  },
  addToFlexup({ _commit }, partner) {
    this.$repos.partners.create(partner)
  }
}
