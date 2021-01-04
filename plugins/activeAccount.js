import { instantTranslate, addConvertedPriceToPayload } from './utils'

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
    ctx.store.dispatch('contracts/getLegalStructures', {}, { root: true })
    ctx.store.dispatch('currencies/get', {}, { root: true })
    ctx.store.dispatch('offers/get', {}, { root: true })
    ctx.store.dispatch('orders/get', {}, { root: true })
    ctx.store.dispatch('partners/get', {}, { root: true })
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
    const fallback = ctx.store.getters['settings/fallbackLocale']
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
        return payload
      })
    )
    return res
  },
  async offers() {
    const offers = ctx.store.getters['offers/all']
    const locale = ctx.store.getters['settings/locale']
    const fallback = ctx.store.getters['settings/fallbackLocale']
    const preferredCurrency = this.settings().currency
    const res = await Promise.all(
      offers.map(async (offer) => {
        let payload = {
          ...offer
        }
        const product = ctx.store.getters['products/findById'](offer.product_id)
        if (product) {
          const category = product.category
          payload = {
            ...payload,
            category: instantTranslate(category.name, locale, fallback)
          }
        }
        payload = await addConvertedPriceToPayload(
          payload,
          offer.price,
          offer.currency,
          preferredCurrency
        )
        return payload
      })
    )
    return res
  },
  partners() {
    const partnerIds = ctx.store.getters['partners/ids']
    const res = []
    for (let i = 0; i < partnerIds.length; i++) {
      const partner = this.getPartner(partnerIds[i])
      res.push(partner)
    }
    return res
  },
  getPartner(partnerId) {
    if (!partnerId) return null
    const id = parseInt(partnerId) || null
    const partner = ctx.store.getters['partners/find'](id)
    if (!partner) return null
    const countryId = parseInt(partner.country_id) || null
    const legalStructureId = parseInt(partner.legal_structure_id) || null
    const country = ctx.store.getters['countries/find'](countryId)
    const legalStructure = ctx.store.getters['contracts/getLegalStructureById'](
      legalStructureId
    )
    const res = {
      ...partner,
      country,
      legalStructure
    }
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
    const products = ctx.store.getters['products/all']
    const locale = ctx.store.getters['settings/locale']
    const fallback = ctx.store.getters['settings/fallbackLocale']
    const res = products.map((product) => {
      const category = ctx.store.getters['categories/find'](product.category_id)
      const payload = {
        ...product,
        category: instantTranslate(category.name, locale, fallback)
      }
      return payload
    })
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
      const preferredCurrency = ctx.store.getters['accounts/preferredCurrency']
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
