// Action de base
export default {
  get({ commit }) {
    // charger les produits
    this.$repos.products.index().then((data) => commit('set', data))
  },
  add({ commit }, item) {
    const product = JSON.parse(JSON.stringify(item))
    console.log(product)
    this.$repos.products.create(product).then((res) => {
      commit('add', res)
    })
  }
}
