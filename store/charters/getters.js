export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  get: (state) => (idA, idB) => {
    if (!(idA && idB)) return []
    const res = state.items.filter(
      (c) => c.account_id === idA || c.account_id === idB
    )
    return res
  }
}
