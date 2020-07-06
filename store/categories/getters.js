export default {
  all(state) {
    if (!state.items.length) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  find: (state) => (id) => {
    if (!state.items) return null
    const categoryId = parseInt(id)
    const res = state.items.find((v) => v.id === categoryId)
    return res
  },
  offers: (state, _getters, _rootStates, rootGetters) => (id) => {
    if (!state.current) return null
    const categoryId = parseInt(id)
    console.log('Retourne les offres propres à une catégorie')
    const res = rootGetters['offers/category'](categoryId)
    return res
  },
  offersGeneral: (state) => (id) => {
    if (!state.current) return null
    let res = []
    console.log('Retourne toutes offres propres à une catégorie')
    this.$axios
      .$get(`/offers?category_id=${id}`)
      .then((offers) => (res = offers))
    return res
  }
}
