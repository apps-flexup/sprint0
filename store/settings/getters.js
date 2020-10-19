export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  manageMenu(state) {
    if (!state.manageMenu) return []
    const res = JSON.parse(JSON.stringify(state.manageMenu))
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
  },
  sellerMenu(state) {
    if (!state.sellerMenu) return []
    const res = JSON.parse(JSON.stringify(state.sellerMenu))
    return res.filter((m) => m.active)
  }
}
