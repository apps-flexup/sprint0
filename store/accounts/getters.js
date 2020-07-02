export default {
  all(state) {
    if (!state.items.length) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  first(state) {
    if (!state.items.length) return -1
    const res = JSON.parse(JSON.stringify(state.items[0]))
    return res.id
  },
  selected(state, getters) {
    if (!state.current) return getters.first
    console.log('selected il y a un state')
    const res = JSON.parse(JSON.stringify(state.current))
    return res
  }
}
