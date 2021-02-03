// Action de base
export default {
  get({ commit }) {
    // charger les produits
    this.$repos.references.index().then((data) => commit('set', data))
  }
}
