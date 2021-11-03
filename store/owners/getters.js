export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  ownersIds(state) {
    const owners = state.items
    const res = owners.map((owner) => owner.to_id)
    return res
  },
  findById: (state) => (ownerId) => {
    const res = state.items.find((owner) => owner.to_id === ownerId)
    return res
  }
}
