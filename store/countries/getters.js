export default {
  all(state) {
    if (!state.items.length) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  find: (state) => (id) => {
    if (!state.items.length) return null
    const recordId = parseInt(id)
    const res = state.items.find((v) => v.id === recordId)
    return res
  }
}
