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
  setCurrent({ commit }, id) {
    commit('setCurrent', id)
  }
}
