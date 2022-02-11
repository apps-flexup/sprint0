export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  // Filter partenaires
  contacts(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
}
