export default {
  all(state) {
    if (!state.items) return []
    let res = JSON.parse(JSON.stringify(state.items))
    res = await Promise.all(res.map((thirdParty) => {
      if (thirdParty.flexup_account_id) {
        const account = await this.$repos.accounts.show(thirdParty.flexup_account_id)
        thirdParty = {...thirdParty, type: account.type, name: account.name }
        return thirdParty
      }
    }))
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
