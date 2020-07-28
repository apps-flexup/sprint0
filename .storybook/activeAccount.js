import store from '@/.storybook/store'

const activeAccount = {
  // clear() {
  //   ctx.store.dispatch('accounts/clear', {}, { root: true })
  //   ctx.store.dispatch('charters/clear', {}, { root: true })
  //   ctx.store.dispatch('contacts/clear', {}, { root: true })
  //   ctx.store.dispatch('contracts/clear', {}, { root: true })
  //   ctx.store.dispatch('currencies/clear', {}, { root: true })
  //   ctx.store.dispatch('offers/clear', {}, { root: true })
  //   ctx.store.dispatch('orders/clear', {}, { root: true })
  //   ctx.store.dispatch('partners/clear', {}, { root: true })
  //   ctx.store.dispatch('products/clear', {}, { root: true })
  // },
  // get() {
  //   const res = ctx.store.getters['accounts/selected']
  //   return res
  // },
  // set(accountId) {
  //   if (accountId === -1) return
  //   ctx.store.dispatch('accounts/setCurrent', accountId)
  //   ctx.store.dispatch('charters/get', {}, { root: true })
  //   ctx.store.dispatch('contacts/get', {}, { root: true })
  //   ctx.store.dispatch('contracts/getContracts', {}, { root: true })
  //   ctx.store.dispatch('contracts/getLegalStructures', {}, { root: true })
  //   ctx.store.dispatch('currencies/get', {}, { root: true })
  //   ctx.store.dispatch('offers/get', {}, { root: true })
  //   ctx.store.dispatch('orders/get', {}, { root: true })
  //   ctx.store.dispatch('partners/get', {}, { root: true })
  //   ctx.store.dispatch('products/get', {}, { root: true })
  // },
  // contracts() {
  //   const res = ctx.store.getters['contracts/all']
  //   return res
  // },
  // charters() {
  //   const res = ctx.store.getters['charters/all']
  //   return res
  // },
  // contacts() {
  //   const res = ctx.store.getters['contacts/all']
  //   return res
  // },
  currencies() {
    const res = store.getters['currencies/all']
    console.log('Get currencies: ', store.getters['currencies/all'])
    return res
  },
  // orders() {
  //   const res = ctx.store.getters['orders/all']
  //   return res
  // },
  // offers() {
  //   const res = ctx.store.getters['offers/all']
  //   return res
  // },
  // async partners() {
  //   const partnerIds = ctx.store.getters['partners/ids']
  //   const res = []
  //   for (let i = 0; i < partnerIds.length; i++) {
  //     const partner = await this.getPartner(partnerIds[i])
  //     res.push(partner)
  //   }
  //   return res
  // },
  // async getPartner(partnerId) {
  //   if (!partnerId) return null
  //   const id = parseInt(partnerId)
  //   const url = `/partners?id=${id}`
  //   let partner = await ctx.$axios.$get(url)
  //   partner = partner[0]
  //   if (!partner) return null
  //   const countryId = parseInt(partner.country_id) || null
  //   const legalStructureId = parseInt(partner.legal_structure_id) || null
  //   const country = await ctx.store.getters['countries/find'](countryId)
  //   const legalStructure = await ctx.store.getters[
  //     'contracts/getLegalStructureById'
  //   ](legalStructureId)
  //   const res = {
  //     ...partner,
  //     country,
  //     legalStructure
  //   }
  //   return res
  // },
  // async allPartners() {
  //   const partners = await this.partners()
  //   const partnerIds = await ctx.store.getters['partners/ids']
  //   const res = []
  //   res.push({ header: 'autocomplete.partners.mine' })
  //   partners.forEach((item) => res.push(item))
  //   res.push({ header: 'autocomplete.partners.flexup' })
  //   const data = await ctx.$axios.$get('/partners')
  //   data.forEach((item) => {
  //     const tmp = item
  //     tmp.avatar = require('~/static/logo.svg')
  //     if (!partnerIds.includes(res.id)) res.push(tmp)
  //   })
  //   return res
  // },
  // products() {
  //   const res = ctx.store.getters['products/all']
  //   return res
  // },
  // headersProducts() {
  //   const res = ctx.store.getters['headers/products']
  //   res.push({ text: 'headers.actions', value: 'actions', sortable: false })
  //   return res
  // },
  // headersOffers() {
  //   const res = ctx.store.getters['headers/offers']
  //   res.push({ text: 'headers.actions', value: 'actions', sortable: false })
  //   return res
  // },
  // headersOrders() {
  //   const res = ctx.store.getters['headers/orders']
  //   res.push({ text: 'headers.actions', value: 'actions', sortable: false })
  //   return res
  // },
  // headersOrderLines() {
  //   const res = ctx.store.getters['headers/orderLines']
  //   res.push({ text: 'headers.actions', value: 'actions', sortable: false })
  //   return res
  // },
  // hasRole(role) {
  //   const res = ctx.store.$auth.user
  //   console.log('role :', role, ', res :', res)
  //   return true
  // },
  // addProduct(newProduct) {
  //   if (Object.prototype.hasOwnProperty.call(newProduct, 'id')) {
  //     // update du produit
  //     ctx.store.dispatch('products/add', newProduct)
  //   } else {
  //     const product = {
  //       category_id: newProduct.categoryId,
  //       name: newProduct.name,
  //       unit: newProduct.unit,
  //       dimension: newProduct.dimension,
  //       status: 'draft'
  //     }
  //     ctx.$repos.products.createWithAccountId(product).then((_prod) => {
  //       ctx.store.dispatch('products/get')
  //     })
  //   }
  // },
  // addOffer(newOffer) {
  //   if (Object.prototype.hasOwnProperty.call(newOffer, 'id')) {
  //     // update de l'offre
  //     ctx.store.dispatch('offers/add', newOffer)
  //   } else {
  //     const offer = {
  //       product_id: newOffer.productId,
  //       name: newOffer.name,
  //       price: newOffer.price,
  //       currency: newOffer.currency,
  //       unit: newOffer.unit,
  //       dimension: newOffer.dimension,
  //       status: 'draft'
  //     }
  //     ctx.$repos.offers.createWithAccountId(offer).then((_off) => {
  //       ctx.store.dispatch('offers/get')
  //     })
  //   }
  // }
}

export default activeAccount