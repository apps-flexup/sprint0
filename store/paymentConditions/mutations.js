export default {
  set(state, items) {
    state.items = items
  },
  add(state, item) {
    state.items.push(item)
  },
  remove(state, item) {
    state.items = state.items.filter((v) => v.id !== item.id)
  },
}
