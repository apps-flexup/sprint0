const activeAccount = (ctx) => ({
  clear() {
    ctx.store.dispatch('accounts/clear', {}, { root: true })
    ctx.store.dispatch('contracts/clear', {}, { root: true })
    ctx.store.dispatch('contacts/clear', {}, { root: true })
    ctx.store.dispatch('charters/clear', {}, { root: true })
    ctx.store.dispatch('offers/clear', {}, { root: true })
    ctx.store.dispatch('orders/clear', {}, { root: true })
    ctx.store.dispatch('partners/clear', {}, { root: true })
    ctx.store.dispatch('products/clear', {}, { root: true })
  },
  get() {
    const res = ctx.store.getters['accounts/selected']
    return res
  },
  set(accountId) {
    if (accountId === -1) return
    ctx.store.dispatch('accounts/setCurrent', accountId)
    ctx.store.dispatch('contracts/getContracts', {}, { root: true })
    ctx.store.dispatch('partners/get', {}, { root: true })
    ctx.store.dispatch('products/get', {}, { root: true })
    ctx.store.dispatch('contacts/get', {}, { root: true })
    ctx.store.dispatch('charters/get', {}, { root: true })
    ctx.store.dispatch('offers/get', {}, { root: true })
    ctx.store.dispatch('orders/get', {}, { root: true })
    ctx.store.dispatch('partners/get', {}, { root: true })
    ctx.store.dispatch('products/get', {}, { root: true })
  },
  contracts() {
    const res = ctx.store.getters['contracts/all']
    return res
  },
  charters() {
    const res = ctx.store.getters['charters/all']
    return res
  },
  contacts() {
    const res = ctx.store.getters['contacts/all']
    return res
  },
  orders() {
    const res = ctx.store.getters['orders/all']
    return res
  },
  offers() {
    const res = ctx.store.getters['offers/all']
    return res
  },
  partners() {
    const res = ctx.store.getters['partners/all']
    return res
  },
  products() {
    const res = ctx.store.getters['products/all']
    return res
  },
  headersProducts() {
    const res = ctx.store.getters['headers/products']
    res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    return res
  },
  headersOffers() {
    const res = ctx.store.getters['headers/offers']
    res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    return res
  },
  hasRole(role) {
    const res = ctx.store.$auth.user
    console.log('role :', role, ', res :', res)
    return true
  },
  addProduct(newProduct) {
    const product = {
      category_id: newProduct.category_id,
      periodicity: newProduct.periodicity,
      name: newProduct.name,
      status: 'draft'
    }
    const dimension = 'dimension'
    const offer = {
      dimension,
      name: newProduct.name,
      unit: newProduct.unit,
      price: newProduct.price,
      elasticity: newProduct.elasticity,
      status: 'draft',
      currency: newProduct.currency
    }
    ctx.$repos.products.createAccount(product).then((prod) => {
      offer.product_id = prod.id
      ctx.$repos.offers.createAccount(offer).then((res) => {
        ctx.store.dispatch('products/get')
        ctx.store.dispatch('offers/get')
        return res
      })
    })
  }
})

export default (ctx, inject) => {
  const account = activeAccount(ctx)

  inject('activeAccount', account)
}
