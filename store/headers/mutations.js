export default {
  set(state, items) {
    state.items = items
  },
  setContractHeader(state, items) {
    state.contracts = items
  },
  setOrderLineHeaders(state, items) {
    state.orderLines = items
  },
  setOrderLineCartHeaders(state, items) {
    state.orderLinesCart = items
  }
}
