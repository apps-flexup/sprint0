// Action de base
export default {
  get({ commit }) {
    // charger les produits
    this.$repos.products
      .indexWithAccountId()
      .then((data) => commit('set', data))
  },
  clear({ commit }) {
    commit('set', [])
  },
  remove({ commit }, product) {
    product = {
      ...product,
      status: 'archived'
    }
    this.$repos.products.update(product).then((res) => {
      commit('remove', res)
      commit('add', res)
    })
  },
  add({ commit }, product) {
    if (Object.prototype.hasOwnProperty.call(product, 'id')) {
      this.$repos.products.update(product).then((res) => {
        commit('update', res)
      })
    } else {
      this.$repos.products.createWithAccountId(product).then((res) => {
        commit('add', res)
      })
    }
  }
}
