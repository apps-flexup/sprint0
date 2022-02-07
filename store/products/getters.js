export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  allWithFilters: (state) => (statusFilters) => {
    if (!state.items) return []
    const filteredItems = state.items.filter((item) => {
      const insensitiveFilters = statusFilters.map((status) => status.toLowerCase())
      return insensitiveFilters.includes(item.status.toLowerCase())
    })
    const res = JSON.parse(JSON.stringify(filteredItems))
    return res
  },
  findById: (state, _getters, _rootStates, rootGetters) => (productId) => {
    if (!state.items) return null
    const id = parseInt(productId)
    const res = state.items.find((v) => parseInt(v.id) === id)
    if (!res) return null
    const unit = res.unit || null
    const categoryId = parseInt(res.categoryId) || null
    const category = rootGetters['categories/find'](categoryId)
    const name = res.name
    const payload = {
      ...res,
      unit,
      category,
      name,
    }
    return payload
  },
  availableStatus(state) {
    return state.availableStatus
  },
  availableFilters(state) {
    return state.availableFilters
  },
}
