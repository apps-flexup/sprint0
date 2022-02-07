// Action de base
export default {
  get({ commit }) {
    this.$repos.countries.index().then((data) => {
      commit('set', data)
    })
  },
  clear({ commit }) {
    commit('clear')
  },
}
