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
  },
  findById: (state, _getters, _rootStates) => (offerId) => {
    if (!state.items) return null
    const id = parseInt(offerId)
    const res = state.items.find((v) => parseInt(v.id) === id)
    if (!res) return null
    const unit = res.unit || null
    const productId = res.productId || null
    const name = res.name || null
    const price = res.price || null
    const vat = res.vat || null
    const payload = {
      ...res,
      unit,
      price,
      vat,
      productId,
      name
    }
    return payload
  }
}
