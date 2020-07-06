export default {
  all(state) {
    if (!state.items.length) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  find: (state) => (id) => {
    if (!state.items || !id) return null
    const recordId = parseInt(id)
    const res = state.items.find((v) => parseInt(v.id) === recordId)
    return res
  },
  findByDimension: (state) => (dimension, unit) => {
    if (!state.items || !dimension || !unit) return null
    const res = state.items.find(
      (v) => v.dimension === dimension && v.symbole === unit
    )
    return res
  }
}
