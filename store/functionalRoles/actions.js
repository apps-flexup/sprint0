// Action de base
export default {
  get({ commit }) {
    return this.$repos.functionalRoles.index().then((data) => {
      commit('set', data)
    })
  }
}
