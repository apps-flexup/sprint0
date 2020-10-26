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
  set(accountId) {
    store.dispatch('accounts/setCurrent', accountId)
    store.dispatch('settings/getSettings', {}, { root: true })
  },
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
  settings() {
    const res = store.getters['settings/settings']
    return res
  },
  currencies() {
    const res = store.getters['currencies/all']
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
    const partnerIds = store.getters['partners/ids']
    const res = []
    for (let i = 0; i < partnerIds.length; i++) {
      const partner = this.getPartner(partnerIds[i])
      console.log('partner: ', partner)
      res.push(partner)
    }
    return res
  },
  getPartner(partnerId) {
    if (!partnerId) return null
    const id = parseInt(partnerId) || null
    let partner = store.getters['partners/find'](id)
    if (!partner) return null
    const countryId = parseInt(partner.country_id) || null
    const legalStructureId = parseInt(partner.legal_structure_id) || null
    const country = store.getters['countries/find'](countryId)
    const legalStructure = store.getters[
      'contracts/getLegalStructureById'
    ](legalStructureId)
    const res = {
      ...partner,
      country,
      legalStructure
    }
    return res
  },
  async allPartners() {
    const partners = this.partners()
    const partnerIds = store.getters['partners/ids']
    const res = []
    res.push({ header: 'autocomplete.partners.mine' })
    partners.forEach((item) => res.push(item))
    res.push({ header: 'autocomplete.partners.flexup' })
    const data = [
      {
        account_id: 10,
        address: "12 rue de la poupée qui tousse",
        city: "Paris",
        country_id: 77,
        id: 8,
        name: "La riflette Toto",
        zip: "75800"
      },
      {
        account_id: 10,
        address: "89 rue des avenues",
        city: "Une Ville",
        country_id: 77,
        id: 9,
        name: "Marcel Flombard",
        zip: "9876541"
      },
      {
        account_id: 10,
        address: "9 rue des longs champs",
        city: "Founiard la glaneuse",
        country_id: 77,
        id: 10,
        name: "Si c'estait possible",
        zip: "060"
      },
      {
        name: "ABC",
        address: "10 rue ABC",
        zip: "75001",
        city: "Paris",
        country_id: 77,
        legal_structure_id: 2,
        account_id: 1,
        id: 11
      }
    ]
    data.forEach((item) => {
      const tmp = item
      tmp.avatar = require('~/static/logo.svg')
      if (!partnerIds.includes(res.id)) res.push(tmp)
    })
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
  headersOffers() {
    const res = store.getters['headers/offers']
    res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    return res
  },
  headersOrders() {
    const res = store.getters['headers/orders']
    res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    return res
  },
  headersOrderLines() {
    const res = store.getters['headers/orderLines']
    res.push({ text: 'headers.actions', value: 'actions', sortable: false })
    return res
  },
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
