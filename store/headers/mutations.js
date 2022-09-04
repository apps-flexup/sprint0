export default {
  set(state, items) {
    state.items = items
  },
  setOrderItemHeaders(state, items) {
    state.orderItems = items
  },
  setOrderItemCartHeaders(state, items) {
    state.orderItemsCart = items
  }
}
