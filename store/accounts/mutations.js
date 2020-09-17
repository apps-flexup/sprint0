export default {
  set(state, items) {
    state.items = items
  },
  clear(state) {
    state.items = []
    state.current = null
  },
  setCurrent(state, id) {
    state.current = id
  },
  add(state, item) {
    state.items.push(item)
  },
  remove(state, item) {
    state.items = state.items.filter((v) => v.id !== item.id)
  }
}
