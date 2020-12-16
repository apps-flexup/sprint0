export default {
  all(state, _getters, _rootStates, rootGetters) {
    if (!state.items) return []
    const items = JSON.parse(JSON.stringify(state.items))
    const res = items.map((item) => {
      const categoryId = parseInt(item.category_id)
      const category = rootGetters['categories/find'](categoryId)
      const payload = {
        ...item,
        category: category.name
      }
      return payload
    })
    return res
  },
  findById: (state, _getters, _rootStates, rootGetters) => (productId) => {
    if (!state.items) return null
    const id = parseInt(productId)
    const res = state.items.find((v) => parseInt(v.id) === id)
    if (!res) return null
    const unit = res.unit || null
    const categoryId = parseInt(res.category_id) || null
    const category = rootGetters['categories/find'](categoryId)
    const name = res.name
    const payload = {
      ...res,
      unit,
      category,
      name
    }
    return payload
  }
}
