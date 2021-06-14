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
  type() {
    const accountId = this.get()
    const account = ctx.store.getters['accounts/findById'](accountId)
    if (!account) return null
    const type = account.type
    return type
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
    ctx.store.dispatch('paymentConditions/get', {}, { root: true })
    ctx.store.dispatch('paymentStructures/get', {}, { root: true })
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
    ctx.app.i18n.locale = settings.locale
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
  async allThirdPartyAccounts() {
    const thirdPartyAccounts = await this.items('thirdPartyAccounts')
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
  headers(tableName) {
    const res = ctx.store.getters['settings/headers'](tableName)
    return res
  },
  items(tableName) {
    const res = ctx.store.getters[tableName + '/all']
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
  },
  addPaymentCondition(newPaymentCondition) {
    ctx.store.dispatch('paymentConditions/add', newPaymentCondition)
  },
  addPaymentStructure(newPaymentStructure) {
    ctx.store.dispatch('paymentStructures/add', newPaymentStructure)
  },
  inviteUserWithRole(user, role) {
    // Here we need to send a notification. For now, we add the user to the members directly
    console.log('on invite le user: ', user.name)
    console.log('avec le role: ', role)
    const givenRole = {
      from_type: 'Account',
      from_id: this.get(),
      to_type: 'User',
      to_id: user.uuid,
      role,
      data: null,
      status: 'WaitingConfirmation'
    }
    console.log('given role: ', givenRole)
    ctx.store.dispatch('members/add', givenRole)
  }
})

export default (ctx, inject) => {
  const account = activeAccount(ctx)

  inject('activeAccount', account)
}
