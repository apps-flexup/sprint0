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
    const res = JSON.parse(JSON.stringify(state.current))
    return res
  },
  findById: (state, _getters, _rootStates, rootGetters) => (accountId) => {
    if (!state.items) return null
    const id = parseInt(accountId)
    const account = state.items.find((v) => parseInt(v.id) === id)
    if (!account) return null
    const legalStructureId = parseInt(account.legal_structure_id) || null
    const legalStructure = rootGetters['contracts/getLegalStructureById'](legalStructureId)
    const payload = {
      ...account,
      legalStructure
    }
    const res = JSON.parse(JSON.stringify(payload))
    return res
  },
  current(state) {
    return state.current
  },
  preferredCurrency(state, getters) {
    if (!state.items) return null
    const currentId = state.current
    if (!currentId) return null
    const currentAccount = getters.findById(currentId)
    return currentAccount.currency
  },
  others(state, getters) {
    if (!state.items) return null
    const res = JSON.parse(JSON.stringify(state.items))
    const current = getters.current
    const i = res.findIndex((element) => element.id === current)
    res.splice(i, 1)
    return res
  },
  getMyPersonalAccount: (state) => {
    if (!state.items) return null
    const account = state.items.find((v) => {
      return v.type === 'Personal'
    })
    if (!account) return null
    const res = JSON.parse(JSON.stringify(account))
    return res
  },
  allSubAccounts(state) {
    const res = JSON.parse(JSON.stringify(state.items))
    let i = 0
    while (i < res.length) {
      const account = res[i]
      if (account.type !== 'SubAccount') {
        res.splice(i, 1)
        i = -1
      }
      i++
    }
    return res
  }
}
