// Action de base
export default {
  get({ commit }) {
    // charger les produits
    this.$repos.products.indexAccount().then((data) => commit('set', data))
  },
  clear({ commit }) {
    commit('set', [])
  },
  remove({ commit }, product) {
    // charger les contracts
    this.$repos.products
      .delete(product.id)
      .then(() => commit('remove', product))
  },
  add({ commit }, product) {
    // charger les contracts
    if (Object.prototype.hasOwnProperty.call(product, 'id')) {
      this.$repos.products.update(product).then((res) => {
        commit('remove', res)
        commit('add', res)
      })
    } else {
      this.$repos.products.createAccount(product).then((res) => {
        commit('add', res)
      })
    }
  }
}
