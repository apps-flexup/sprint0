import { jsonServerOrderGateway, store } from '~/container'
import { getMyOrdersVM } from '~/src/flexup/adapters/primary/view-models-generator/my-orders-screen/myOrdersViewModelGenerator'

const activeAccount = (ctx) => ({
  clear() {
    ctx.store.dispatch('accounts/clear', {}, { root: true })
    ctx.store.dispatch('charters/clear', {}, { root: true })
    ctx.store.dispatch('contacts/clear', {}, { root: true })
    ctx.store.dispatch('contracts/clear', {}, { root: true })
    ctx.store.dispatch('currencies/clear', {}, { root: true })
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
    jsonServerOrderGateway.setActiveAccountId(accountId)
    jsonServerOrderGateway.setAxios(ctx.$axios)
    if (accountId === -1) return
    ctx.store.dispatch('accounts/setCurrent', accountId)
    ctx.store.dispatch('charters/get', {}, { root: true })
    ctx.store.dispatch('contacts/get', {}, { root: true })
    ctx.store.dispatch('contracts/getContracts', {}, { root: true })
    ctx.store.dispatch('contracts/getLegalStructures', {}, { root: true })
    ctx.store.dispatch('currencies/get', {}, { root: true })
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
    ctx.store.dispatch('members/get')
    ctx.store.dispatch('owners/get')
    ctx.app.router.push('/')
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
  items(tableName, statusFilters = null) {
    if (tableName === 'orders') {
      const res = getMyOrdersVM(store.getState())
      console.log('on veut les orders: ', res)
      return res
    }
    if (!statusFilters) return ctx.store.getters[tableName + '/all']
    const res = ctx.store.getters[tableName + '/allWithFilters'](statusFilters)
    return res
  },
  hasRole(role) {
    const res = ctx.store.$auth.user
    console.log('role :', role, ', res :', res)
    return true
  },
  addProduct(newProduct) {
    ctx.store.dispatch('products/add', newProduct)
  },
  addPaymentCondition(newPaymentCondition) {
    ctx.store.dispatch('paymentConditions/add', newPaymentCondition)
  },
  addPaymentStructure(newPaymentStructure) {
    ctx.store.dispatch('paymentStructures/add', newPaymentStructure)
  },
  inviteEntityWithRole(entity, role) {
    // Here we need to send a notification. For now, we add the user to the members directly
    const givenRole = {
      from_type: 'Account',
      from_id: this.get(),
      to_type: 'User',
      to_id: entity.parent_id,
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
