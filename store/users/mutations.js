export default {
  set(state, items) {
    state.items = items
  },
  add(state, item) {
    state.items.push(item)
  }
}
