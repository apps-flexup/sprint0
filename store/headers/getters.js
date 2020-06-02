export default {
  contracts(state) {
    if (!state.contracts) return []
    const res = JSON.parse(JSON.stringify(state.contracts))
    return res
  },
  contacts(state) {
    if (!state.contacts) return []
    const res = JSON.parse(JSON.stringify(state.contacts))
    return res
  },
  products(state) {
    if (!state.products) return []
    const res = JSON.parse(JSON.stringify(state.products))
    return res
  },
  offers(state) {
    if (!state.offers) return []
    const res = JSON.parse(JSON.stringify(state.offers))
    return res
  },
  orders(state) {
    if (!state.orders) return []
    const res = JSON.parse(JSON.stringify(state.orders))
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
  }
}
