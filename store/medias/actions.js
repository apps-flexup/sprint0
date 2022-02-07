// Action de base
export default {
  get({ commit }) {
    this.$repos.medias.index().then((data) => {
      commit('set', data)
    })
  },
}
