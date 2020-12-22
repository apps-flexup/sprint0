export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  getForAccount: (state) => (id) => {
    if (!state.all) return null
    const accountId = parseInt(id)
    const offers = state.all.filter((item) => {
      return item.account_id === accountId
    })
    const res = JSON.parse(JSON.stringify(offers))
    return res
  },
  getForProduct: (state) => (id) => {
    if (!state.items) return null
    const productId = parseInt(id)
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
