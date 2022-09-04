export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  findById: (state) => (paymentConditionId) => {
    if (!state.items) return null
    const id = parseInt(paymentConditionId)
    const res = state.items.find((v) => parseInt(v.id) === id)
    return res
  }
}
