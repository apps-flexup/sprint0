export default {
  all(state) {
    const to = JSON.parse(JSON.stringify(state.to))
    const from = JSON.parse(JSON.stringify(state.from))
    return [...to, ...from]
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
