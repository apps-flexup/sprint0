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
  },
  findByIso3: (state) => (iso3) => {
    if (!state.items.length) return null
    const res = state.items.find((v) => v.iso3 === iso3)
    return res
  },
}
