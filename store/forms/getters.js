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
  thirdPartyAccounts(state) {
    if (!state.thirdPartyAccounts) return []
    const res = JSON.parse(JSON.stringify(state.thirdPartyAccounts))
    return res
  },
  paymentConditions(state) {
    if (!state.paymentConditions) return []
    const res = JSON.parse(JSON.stringify(state.paymentConditions))
    return res
  },
  paymentStructures(state) {
    if (!state.paymentStructures) return []
    const res = JSON.parse(JSON.stringify(state.paymentStructures))
    return res
  }
}
