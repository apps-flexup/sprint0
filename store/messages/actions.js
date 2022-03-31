export default {
  get({ commit }) {
    this.$repos.messages.indexWithAccountId().then((data) => commit('set', data))
  },
}
