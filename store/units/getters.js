export default {
  all(state) {
    if (!state.items.length) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  find: (state) => (id) => {
    if (!state.current) return null
    const recordId = parseInt(id)
    const res = state.items.find((v) => v.id === recordId)
    return res
  },
  findByDimension: (state) => (dimension, unit) => {
    if (!state.current) return null
    // const recordId = parseInt(id)
    const res = state.items.find(
      (v) => v.dimension === dimension && v.unit === unit
    )
    return res
  }
}
