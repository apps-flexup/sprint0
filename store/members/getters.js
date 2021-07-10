export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  roleFor: (state) => (accountId, userId) => {
    const members = state.items.filter((item) => {
      return (
        item.from_type === 'Account' &&
        item.from_id === accountId &&
        item.to_type === 'User' &&
        item.to_id === userId
      )
    })
    const res = members.map((member) => member.role)
    return res
  }
}
