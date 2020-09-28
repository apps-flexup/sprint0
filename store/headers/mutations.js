export default {
  set(state, items) {
    state.items = items
  },
  setContractHeader(state, items) {
    state.contracts = items
  },
  setProductHeaders(state, items) {
    state.products = items
  },
  setPartnerHeaders(state, items) {
    state.partners = items
  },
  setOfferHeaders(state, items) {
    state.offers = items
  },
  setOrderHeaders(state, items) {
    state.orders = items
  },
  setOrderLineHeaders(state, items) {
    state.orderLines = items
  },
  setOrderLineCartHeaders(state, items) {
    state.orderLinesCart = items
  }
}
