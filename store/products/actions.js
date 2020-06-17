// Action de base
export default {
  get({ commit }) {
    // charger les produits
    this.$repos.products.index().then((data) => commit('set', data))
  }
}
