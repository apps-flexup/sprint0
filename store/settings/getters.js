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
  userMenu(state) {
    if (!state.userMenu) return []
    const res = JSON.parse(JSON.stringify(state.userMenu))
    return res.filter((m) => m.active)
  },
  accountMenu(state) {
    if (!state.accountMenu) return []
    const res = JSON.parse(JSON.stringify(state.accountMenu))
    return res.filter((m) => m.active)
  },
  buyerMenu(state) {
    if (!state.buyerMenu) return []
    const res = JSON.parse(JSON.stringify(state.buyerMenu))
    return res.filter((m) => m.active)
  }
}
