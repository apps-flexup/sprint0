export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  getForProduct: (state) => (productId) => {
    if (!state.items) return null
    const offer = state.items.filter((item) => {
      return item.product_id === productId
    })
    const res = JSON.parse(JSON.stringify(offer))
    return res
  }
}
