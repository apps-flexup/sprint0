import {
  addConvertedPriceToPayload,
  addLocaleDateToPayload,
  addStructureNameToPayload
} from './utils'

const activeAccount = (ctx) => ({
  clear() {
    ctx.store.dispatch('accounts/clear', {}, { root: true })
    ctx.store.dispatch('charters/clear', {}, { root: true })
    ctx.store.dispatch('contacts/clear', {}, { root: true })
    ctx.store.dispatch('contracts/clear', {}, { root: true })
    ctx.store.dispatch('currencies/clear', {}, { root: true })
    ctx.store.dispatch('offers/clear', {}, { root: true })
    ctx.store.dispatch('orders/clear', {}, { root: true })
    ctx.store.dispatch('thirdPartyAccounts/clear', {}, { root: true })
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
    ctx.store.dispatch('contracts/getLegalStructures', {}, { root: true })
    ctx.store.dispatch('currencies/get', {}, { root: true })
    ctx.store.dispatch('offers/get', {}, { root: true })
    ctx.store.dispatch('orders/get', {}, { root: true })
    ctx.store.dispatch('thirdPartyAccounts/get', {}, { root: true })
    ctx.store.dispatch('products/get', {}, { root: true })
    ctx.store
      .dispatch('settings/getSettings', {}, { root: true })
      .then((_data) => {
        this.setSettings(this.settings())
      })
  },
  settings() {
    const res = ctx.store.getters['settings/settings']
    return res
  },
  setSettings(settings) {
    ctx.app.i18n.locale = settings.language
    ctx.$vuetify.theme.dark = settings.theme === 'dark'
    ctx.store.dispatch('settings/updateSettings', settings)
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
  async orders() {
    const orders = ctx.store.getters['orders/all']
    const locale = ctx.store.getters['settings/locale']
    const preferredCurrency = this.settings().currency
    const res = await Promise.all(
      orders.map(async (order) => {
        let payload = {
          ...order
        }
        payload = await addConvertedPriceToPayload(
          payload,
          order.amount,
          order.currency,
          preferredCurrency
        )
        payload = addLocaleDateToPayload(payload, order.date, locale)
        payload = addStructureNameToPayload(payload, ctx.store, order.structure)
        return payload
      })
    )
    return res
  },
  offers() {
    const offers = ctx.store.getters['offers/all']
    const res = offers.map((offer) => {
      let payload = {
        ...offer
      }
      const product = ctx.store.getters['products/findById'](offer.product_id)
      if (product) {
        payload = {
          ...payload,
          category_id: product.category_id
        }
      }
      return payload
    })
    return res
  },
  headersThirdPartyAccounts() {
    const res = ctx.store.getters['headers/thirdPartyAccounts']
    if (res.length && res[res.length - 1].value !== 'actions')
      res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    return res
  },
  thirdPartyAccounts() {
    const thirdPArtyAccounts = ctx.store.getters['thirdPartyAccounts/all']
    return thirdPArtyAccounts
  },
  async allThirdPartyAccounts() {
    const thirdPartyAccounts = await this.thirdPartyAccounts()
    const thirdPartyIds = await ctx.store.getters['thirdPartyAccounts/ids']
    const res = []
    res.push({ header: 'autocomplete.thirdPartyAccounts.mine' })
    thirdPartyAccounts.forEach((item) => res.push(item))
    res.push({ header: 'autocomplete.thirdPartyAccounts.flexup' })
    const data = await ctx.$axios.$get('/third-party-accounts')
    data.forEach((item) => {
      const tmp = item
      tmp.avatar = require('~/static/logo.svg')
      if (!thirdPartyIds.includes(res.id)) res.push(tmp)
    })
    return res
  },
  products() {
    const res = ctx.store.getters['products/all']
    return res
  },
  headersProducts() {
    const res = ctx.store.getters['headers/products']
    if (res.length && res[res.length - 1].value !== 'actions')
      res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    return res
  },
  headersOffers() {
    const res = ctx.store.getters['headers/offers']
    if (res.sub) {
      if (
        res.sub.offers.length &&
        res.sub.offers[res.sub.offers.length - 1].value !== 'actions'
      )
        res.sub.offers.push({
          text: 'headers.actions',
          value: 'actions',
          sortable: false
        })
    }
    return res
  },
  headersOrders() {
    const res = ctx.store.getters['headers/orders']
    if (res.sub) {
      if (
        res.sub.orders.length &&
        res.sub.orders[res.sub.orders.length - 1].value !== 'actions'
      )
        res.sub.orders.push({
          text: 'headers.actions',
          value: 'actions',
          sortable: false
        })
    }
    return res
  },
  headersOrderLines(addActions = false) {
    const res = ctx.store.getters['headers/orderLines']
    if (addActions) {
      res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    }
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
        name: newProduct.name,
        unit: newProduct.unit,
        dimension: newProduct.dimension,
        status: 'draft'
      }
      ctx.$repos.products.createWithAccountId(product).then((_prod) => {
        ctx.store.dispatch('products/get')
      })
    }
  },
  addOffer(newOffer) {
    if (Object.prototype.hasOwnProperty.call(newOffer, 'id')) {
      // update de l'offre
      ctx.store.dispatch('offers/add', newOffer)
    } else {
      const preferredCurrency = this.settings().currency
      const offer = {
        product_id: newOffer.product_id,
        name: newOffer.name,
        price: newOffer.price,
        currency: preferredCurrency,
        unit: newOffer.unit,
        dimension: newOffer.dimension,
        vat: newOffer.vat,
        status: 'draft'
      }
      ctx.$repos.offers.createWithAccountId(offer).then((_off) => {
        ctx.store.dispatch('offers/get')
      })
    }
  }
})

export default (ctx, inject) => {
  const account = activeAccount(ctx)

  inject('activeAccount', account)
}
