export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  selected(state) {
    if (!state.items.length) return null
    if (!state.current) {
      const first = state.items[0]
      return first.id
    }
    const res = JSON.parse(JSON.stringify(state.current))
    return res
  }
}
