// Action de base
export default {
  get({ commit }) {
    this.$repos.references.index().then((data) => commit('set', data))
  }
}
