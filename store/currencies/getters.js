export default {
  all(state) {
    if (!state.items) return []
    const source = JSON.parse(JSON.stringify(state.items))
    const res = source.map((currency) => {
      const symbole = state.symboles[currency.iso3]
      return {
        ...currency,
        symbole,
      }
    })
    return res
  },
  count(state) {
    if (!state.items) return 0
    return state.items.length
  },
  find: (state) => (id) => {
    if (!state.items || !id) return null
    const items = JSON.parse(JSON.stringify(state.items))
    const res = items.find((item) => parseInt(item.id) === parseInt(id)) || null
    const symbole = state.symboles[res.iso3]
    return {
      ...res,
      symbole,
    }
  },
  findIso: (state) => (iso) => {
    if (!state.items || !iso) return null
    const items = JSON.parse(JSON.stringify(state.items))
    const res = items.find((item) => item.iso3 === iso) || null
    const symbole = state.symboles[res.iso3]
    return {
      ...res,
      symbole,
    }
  },
}
