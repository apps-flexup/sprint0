export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  getForProduct: (state) => (productId) => {
    if (!state.items) return null
    const offers = state.items.filter((item) => {
      return item.product_id === productId
    })
    const res = JSON.parse(JSON.stringify(offers))
    return res
  },
  category: (state) => (categoryId) => {
    if (!state.items) return null
    const offers = state.items.filter((item) => {
      return item.product_id === categoryId
    })
    const res = JSON.parse(JSON.stringify(offers))
    return res
  }
}
