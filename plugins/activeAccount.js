const activeAccount = (store) => ({
  get() {
    let res = store.getters['accounts/selected']
    if (!res) {
      res = store.getters['accounts/first']
      this.set(res)
    }
    return res
  },
  set(accountId) {
    store.dispatch('accounts/setCurrent', accountId)
  },
  contracts() {
    const res = store.getters['contracts/all']
    return res
  },
  charters() {
    const res = store.getters['charters/all']
    return res
  },
  contacts() {
    const res = store.getters['contacts/all']
    return res
  },
  offers() {
    const res = store.getters['offers/all']
    return res
  },
  orders() {
    const res = store.getters['orders/all']
    return res
  },
  hasRole(role) {
    const res = store.$auth.user
    console.log('role :', role, ', res :', res)
    return true
  }
})

export default (ctx, inject) => {
  const account = activeAccount(ctx.app.store)

  inject('activeAccount', account)
}
