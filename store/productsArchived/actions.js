export default {
  get({ commit }) {
    // charger les produits
    this.$repos.products
      .indexWithAccountId()
      .then((data) => commit('set', data))
  },
  removeFromArchive({ commit }, product) {
    product = {
      ...product,
      status: 'inactive'
    }
    this.$repos.products.update(product).then((res) => {
      commit('remove', res)
      commit('add', res)
    })
  }
}
