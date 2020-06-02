export default {
  contracts(state) {
    if (!state.contracts) return []
    const res = JSON.parse(JSON.stringify(state.contracts))
    return res
  },
  partners(state) {
    if (!state.partners) return []
    const res = JSON.parse(JSON.stringify(state.partners))
    return res
  }
}
