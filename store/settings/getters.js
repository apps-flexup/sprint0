export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  menu(state) {
    if (!state.menu) return []
    const res = JSON.parse(JSON.stringify(state.menu))
    return res.filter((m) => m.active)
  },
  settings(state) {
    if (!state.settings) return {}
    const res = JSON.parse(JSON.stringify(state.settings))
    return res
  }
}
