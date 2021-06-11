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
    const accountAlreadyExists = state.items.find((element) => {
      return element.id === item.id
    })
    if (!accountAlreadyExists) state.items.push(item)
  },
  remove(state, item) {
    state.items = state.items.filter((v) => v.id !== item.id)
  }
}
