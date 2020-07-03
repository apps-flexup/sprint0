// Action de base
export default {
  get({ commit }) {
    if (!this.$auth.loggedIn) return
    this.$repos.countries.index().then((data) => {
      commit('set', data)
    })
  },
  clear({ commit }) {
    commit('clear')
  }
}
