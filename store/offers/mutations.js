export default {
  set(state, items) {
    state.items = items
  },
  remove(state, item) {
    state.items = state.items.filter((v) => v.id !== item.id)
  }
}
