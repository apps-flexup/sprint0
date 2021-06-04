// Action de base
export default {
  get({ commit }) {
    return this.$repos.givenRoles.index().then((data) => {
      commit('set', data)
    })
  },
  add({ commit }, givenRole) {
    this.$repos.givenRoles.create(givenRole).then((res) => {
      commit('add', res)
    })
  }
}
