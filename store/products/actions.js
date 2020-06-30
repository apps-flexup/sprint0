// Action de base
export default {
  get({ commit }) {
    // charger les produits
    this.$repos.products.index().then((data) => commit('set', data))
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
      this.$repos.products.create(product).then((res) => {
        commit('add', res)
      })
    }
  }
}
