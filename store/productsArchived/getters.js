export default {
  all(state) {
    if (!state.items) return []
    const archivedItems = state.items.filter(
      (item) => item.status === 'archived'
    )
    const res = JSON.parse(JSON.stringify(archivedItems))
    return res
  }
}
