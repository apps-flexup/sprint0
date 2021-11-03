// Action de base
export default {
  get({ commit }) {
    return this.$repos.users.index().then((data) => {
      commit('set', data)
    })
  },
  add({ commit }, item) {
    const user = JSON.parse(JSON.stringify(item))
    user.uuid = user.sub
    delete user.sub
    this.$repos.users.create(user).then((res) => {
      commit('add', res)
    })
  }
}
