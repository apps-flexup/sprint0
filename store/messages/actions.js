export default {
  From({ commit }) {
    this.$repos.messages.indexFrom().then((data) => commit('setFrom', data))
  },
  to({ commit }) {
    this.$repos.messages.indexTo().then((data) => commit('setTo', data))
  },
  format({commit}, msg) {
    console.log('message recu, action :', msg)
  },
  set({commit}, msg) {
    console.log('message recu, action :', msg)
  }
}
