export default {
  contracts(state) {
    if (!state.contracts) return []
    const res = JSON.parse(JSON.stringify(state.contracts))
    return res
  },
  etapes(state) {
    if (!state.etapes) return []
    const res = JSON.parse(JSON.stringify(state.etapes))
    return res
  }
}
