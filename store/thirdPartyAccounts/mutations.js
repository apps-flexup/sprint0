export default {
  set(state, items) {
    state.items = items
  },
  setAll(state, items) {
    state.all = items
  },
  add(state, item) {
    state.items.push(item)
    state.all.push(item)
  },
  remove(state, item) {
    state.items = state.items.filter((v) => v.id !== item.id)
    state.all = state.all.filter((v) => v.id !== item.id)
  }
}
