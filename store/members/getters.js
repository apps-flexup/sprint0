export default {
  all(state) {
    if (!state.items) return []
    return JSON.parse(JSON.stringify(state.items))
  },
  roleFor: (state) => (accountId, userId) => {
    const members = state.items.filter((item) => {
      return item.from_id === accountId && item.to_id === userId
    })
    return members.map((member) => member.role)
  },
}
