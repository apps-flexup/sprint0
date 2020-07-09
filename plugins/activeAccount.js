const activeAccount = (ctx) => ({
  clear() {
    ctx.store.dispatch('accounts/clear', {}, { root: true })
    ctx.store.dispatch('charters/clear', {}, { root: true })
    ctx.store.dispatch('contacts/clear', {}, { root: true })
    ctx.store.dispatch('contracts/clear', {}, { root: true })
    ctx.store.dispatch('currencies/clear', {}, { root: true })
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
    ctx.store.dispatch('charters/get', {}, { root: true })
    ctx.store.dispatch('contacts/get', {}, { root: true })
    ctx.store.dispatch('contracts/getContracts', {}, { root: true })
    ctx.store.dispatch('offers/get', {}, { root: true })
    ctx.store.dispatch('orders/get', {}, { root: true })
    ctx.store.dispatch('partners/get', {}, { root: true })
    ctx.store.dispatch('partners/get', {}, { root: true })
    ctx.store.dispatch('products/get', {}, { root: true })
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
  currencies() {
    const res = ctx.store.getters['currencies/all']
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
  async allPartners() {
    const partners = await this.partners()
    const partnerIds = await ctx.store.getters['partners/ids']
    const res = []
    res.push({ header: 'autocomplete.partners.mine' })
    partners.forEach((item) => res.push(item))
    res.push({ header: 'autocomplete.partners.flexup' })
    const data = await ctx.$axios.$get('/partners')
    data.forEach((item) => {
      const tmp = item
      tmp.avatar = require('~/static/logo.svg')
      if (!partnerIds.includes(res.id)) res.push(tmp)
    })
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
    if (Object.prototype.hasOwnProperty.call(newProduct, 'id')) {
      // update du produit
      ctx.store.dispatch('products/add', newProduct)
    } else {
      const product = {
        category_id: newProduct.category_id,
        currency: newProduct.currency,
        dimension: newProduct.dimension,
        name: newProduct.name,
        periodicity: newProduct.periodicity,
        price: newProduct.price,
        status: 'draft',
        unit: newProduct.unit
      }
      const offer = {
        currency: newProduct.currency,
        dimension: newProduct.dimension,
        elasticity: newProduct.elasticity,
        name: newProduct.name,
        price: newProduct.price,
        status: 'draft',
        unit: newProduct.unit
      }
      ctx.$repos.products.createWithAccountId(product).then((prod) => {
        offer.product_id = prod.id
        ctx.$repos.offers.createWithAccountId(offer).then(() => {
          ctx.store.dispatch('products/get')
          ctx.store.dispatch('offers/get')
        })
      })
    }
  }
})

export default (ctx, inject) => {
  const account = activeAccount(ctx)

  inject('activeAccount', account)
}
