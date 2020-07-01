// Action de base
export default {
  get({ commit }) {
    if (!this.$auth.loggedIn) return
    this.$axios
      .$get(`accounts?user_id=${this.$auth.user.sub}`)
      .then((data) => commit('set', data))
  },
  clear({ commit }) {
    commit('clear')
  },
  setCurrent({ commit, dispatch }, id) {
    commit('setCurrent', id)
    dispatch('contracts/getContracts', {}, { root: true })
    dispatch('partners/get', {}, { root: true })
    dispatch('products/get', {}, { root: true })
  }
}
