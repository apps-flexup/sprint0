export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  ids(state) {
    if (!state.items) return []
    const res = state.items.map((i) => {
      return i.id
    })
    return res
  },
  find: (state) => (id) => {
    if (!state.all.length) return null
    const recordId = parseInt(id)
    const res = state.all.find((v) => v.id === recordId)
    return res
  }
}