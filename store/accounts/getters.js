export default {
  all(state) {
    if (!state.items.length) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  first(state) {
    if (!state.items.length) return -1
    const res = JSON.parse(JSON.stringify(state.items[0]))
    return res.id
  },
  selected(state, getters) {
    if (!state.current) return getters.first
    console.log('selected il y a un state')
    const res = JSON.parse(JSON.stringify(state.current))
    return res
  },
  findById: (state, _getters, _rootStates, rootGetters) => (accountId) => {
    if (!state.items) return null
    const id = parseInt(accountId)
    const res = state.items.find((v) => parseInt(v.id) === id)
    if (!res) return null
    const countryId = parseInt(res.country_id) || null
    const legalStructureId = parseInt(res.legal_structure_id) || null
    const country = rootGetters['countries/find'](countryId)
    const legalStructure = rootGetters['contracts/getLegalStructureById'](
      legalStructureId
    )
    const payload = {
      ...res,
      country,
      legalStructure
    }
    return payload
  },
  current(state) {
    return state.current
  }
}
