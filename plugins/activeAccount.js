const activeAccount = (store) => ({
  get() {
    const res = store.getters['accounts/selected']
    return res
  },
  set(accountId) {
    store.dispatch('accounts/setCurrent', accountId)
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
