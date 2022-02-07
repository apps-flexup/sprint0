export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  findByUuId: (state) => (uuid) => {
    const users = state.items
    if (!users) return null
    const res = users.find((user) => {
      return user.uuid === uuid
    })
    return res
  },
}
