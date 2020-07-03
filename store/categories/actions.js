// Action de base
export default {
  get({ commit }) {
    if (!this.$auth.loggedIn) return
    this.$repos.categories.index().then((data) => {
      commit('set', data)
    })
  },
  clear({ commit }) {
    commit('clear')
  }
}
