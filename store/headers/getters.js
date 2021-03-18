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
  thirdPartyAccounts(state) {
    if (!state.thirdPartyAccounts) return []
    const res = JSON.parse(JSON.stringify(state.thirdPartyAccounts))
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
  orderLines(state) {
    if (!state.orderLines) return []
    const res = JSON.parse(JSON.stringify(state.orderLines))
    return res
  },
  orderLinesCart(state) {
    if (!state.orderLinesCart) return []
    const res = JSON.parse(JSON.stringify(state.orderLinesCart))
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
  paymentConditions(state) {
    if (!state.paymentConditions) return []
    const res = JSON.parse(JSON.stringify(state.paymentConditions))
    return res
  },
  paymentStructures(state) {
    if (!state.paymentStructures) return []
    const res = JSON.parse(JSON.stringify(state.paymentStructures))
    return res
  },
  paymentConditionsForPaymentStructureForm(state) {
    if (!state.paymentConditionsForPaymentStructureForm) return []
    const res = JSON.parse(
      JSON.stringify(state.paymentConditionsForPaymentStructureForm)
    )
    return res
  }
}
