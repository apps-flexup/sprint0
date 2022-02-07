// Action de base
export default {
  clear({ commit }) {
    commit('set', [])
  },
  remove({ commit }, item) {
    const article = JSON.parse(JSON.stringify(item))
    this.$repos.currencies.delete(article.id).then((res) => {
      commit('remove', article)
      commit('add', res)
      // dispatch('get')
    })
  },
  update({ commit }, item) {
    const article = JSON.parse(JSON.stringify(item))
    this.$repos.currencies.update(article).then((res) => {
      // commit('set', res)
      commit('remove', article)
      commit('add', res)
    })
  },
  add({ commit }, item) {
    const article = JSON.parse(JSON.stringify(item))
    this.$repos.currencies.create(article).then((res) => {
      commit('add', res)
    })
  },
  get({ commit }) {
    this.$repos.currencies.index().then((res) => {
      commit('set', res)
    })
  },
}
