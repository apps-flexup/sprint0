const activeAccount = (store) => ({
  clear() {
    store.dispatch('accounts/clear', {}, { root: true })
    store.dispatch('contracts/clear', {}, { root: true })
    store.dispatch('contacts/clear', {}, { root: true })
    store.dispatch('charters/clear', {}, { root: true })
    store.dispatch('offers/clear', {}, { root: true })
    store.dispatch('orders/clear', {}, { root: true })
    store.dispatch('partners/clear', {}, { root: true })
    store.dispatch('products/clear', {}, { root: true })
  },
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
    store.dispatch('contracts/getContracts', {}, { root: true })
    store.dispatch('partners/get', {}, { root: true })
    store.dispatch('products/get', {}, { root: true })
    store.dispatch('contacts/get', {}, { root: true })
    store.dispatch('charters/get', {}, { root: true })
    store.dispatch('offers/get', {}, { root: true })
    store.dispatch('orders/get', {}, { root: true })
    store.dispatch('partners/get', {}, { root: true })
    store.dispatch('products/get', {}, { root: true })
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
  orders() {
    const res = store.getters['orders/all']
    return res
  },
  offers() {
    const res = store.getters['offers/all']
    return res
  },
  partners() {
    const res = store.getters['partners/all']
    return res
  },
  products() {
    const res = store.getters['products/all']
    return res
  },
  headersProducts() {
    const res = store.getters['headers/products']
    res.push({ text: 'headers.actions', value: 'actions', sortable: false })
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
