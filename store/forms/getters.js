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
  }
}
