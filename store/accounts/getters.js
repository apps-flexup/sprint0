export default {
  all(state) {
    if (!state.items.length) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  first(state) {
    if (!state.items.length) return null
    const res = JSON.parse(JSON.stringify(state.items[0]))
    return res.id
  },
  selected(state, getters) {
    if (!state.current) return null
    const res = JSON.parse(JSON.stringify(state.current)) || getters.first()
    return res
  }
}
