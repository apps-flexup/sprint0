export default {
  set(state, items) {
    state.items = items
  },
  clear(state) {
    state.items = []
    state.current = null
  },
  add(state, item) {
    state.items.push(item)
  },
}
