export default {
  getForAccount: (state) => (_accountId) => {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  }
}
