export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  to(state) {
    if (!state.to) return []
    const res = JSON.parse(JSON.stringify(state.to))
    return res
  },
  from(state) {
    if (!state.from) return []
    const res = JSON.parse(JSON.stringify(state.from))
    return res
  },
}
