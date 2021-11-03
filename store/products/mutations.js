export default {
  set(state, items) {
    state.items = items
  },
  add(state, item) {
    state.items.push(item)
  },
  update(state, item) {
    const index = state.items.findIndex((v) => v.id === item.id)
    state.items[index] = item
  },
  remove(state, item) {
    state.items = state.items.filter((v) => v.id !== item.id)
  }
}
