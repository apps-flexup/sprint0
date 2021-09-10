export default {
  all(state) {
    if (!state.items) return []
    const notArchivedItems = state.items.filter(
      (item) => item.status !== 'archived'
    )
    const res = JSON.parse(JSON.stringify(notArchivedItems))
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
