export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  allWithFilters: (state) => (statusFilters) => {
    if (!state.items) return []
    const filteredItems = state.items.filter((item) => {
      const insensitiveFilters = statusFilters.map((status) => status.toLowerCase())
      return insensitiveFilters.includes(item.status.toLowerCase())
    })
    const res = JSON.parse(JSON.stringify(filteredItems))
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
  },
  local(state) {
    if (!state.items) return []
    let res = JSON.parse(JSON.stringify(state.items))
    res = res.filter((thirdParty) => thirdParty.directory === 'Local')
    return res
  },
  flexup(state) {
    if (!state.items) return []
    let res = JSON.parse(JSON.stringify(state.items))
    res = res.filter((thirdParty) => thirdParty.directory === 'Flexup')
    return res
  },
  availableStatus(state) {
    return state.availableStatus
  },
  availableFilters(state) {
    return state.availableFilters
  }
}
