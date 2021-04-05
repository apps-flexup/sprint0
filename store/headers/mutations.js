export default {
  set(state, items) {
    state.items = items
  },
  setOrderLineHeaders(state, items) {
    state.orderLines = items
  },
  setOrderLineCartHeaders(state, items) {
    state.orderLinesCart = items
  }
}
