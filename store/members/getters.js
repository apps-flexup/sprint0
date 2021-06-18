export default {
  all(state) {
    if (!state.items) return []
    const roles = JSON.parse(JSON.stringify(state.items))
    const res = roles.filter((role) => role.role !== 'Owner')
    return res
  }
}
