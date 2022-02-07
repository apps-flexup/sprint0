export default {
  get: (state) => (tableName) => {
    if (!state[tableName]) return []
    const items = state[tableName]
    let res = items.filter((item) => {
      return item.active === true
    })
    res = JSON.parse(JSON.stringify(res))
    return res
  },
  contacts(state) {
    if (!state.contacts) return []
    const res = JSON.parse(JSON.stringify(state.contacts))
    return res
  },
  orderItems(state) {
    if (!state.orderItems) return []
    const res = JSON.parse(JSON.stringify(state.orderItems))
    return res
  },
  orderItemsCart(state) {
    if (!state.orderItemsCart) return []
    const res = JSON.parse(JSON.stringify(state.orderItemsCart))
    return res
  },
  etapes(state) {
    if (!state.etapes) return []
    const res = JSON.parse(JSON.stringify(state.etapes))
    return res
  },
  etape: (state) => (id) => {
    if (!state.etapes) return []
    let reference = parseInt(id) - 1
    if (reference < 0) reference = 0
    if (reference > state.etapes.length) return 'Étape inconnue'
    const res = state.etapes[reference]
    return res
  },
}
