import { mergeObjects, sortArrayByKey } from '~/plugins/utils'

export default {
  all(state) {
    if (!state.items) return []
    return JSON.parse(JSON.stringify(state.items))
  },
  manageMenu(state) {
    if (!state.manageMenu) return []
    const res = JSON.parse(JSON.stringify(state.manageMenu))
    return res.filter((m) => m.active)
  },
  userMenu(state) {
    if (!state.userMenu) return []
    const res = JSON.parse(JSON.stringify(state.userMenu))
    return res.filter((m) => m.active)
  },
  accountMenu(state, _getters, _rootStates, rootGetters) {
    if (!state.accountMenu || !state.accountMenu.length) return []
    const accountId = rootGetters['accounts/selected']
    const account = rootGetters['accounts/findById'](accountId)
    const accountType = account ? account.type : undefined
    const res = JSON.parse(JSON.stringify(state.accountMenu))
    const informationsIndex = res.findIndex((menu) => menu.title === 'accountMenu.information')
    res[informationsIndex].to += `/${accountId}`
    if (!accountType || accountType === 'Personal') {
      const membersIndex = res.findIndex((menu) => menu.title === 'accountMenu.members')
      res.splice(membersIndex, 1)
    }
    return res.filter((m) => m.active)
  },
  buyerMenu(state) {
    if (!state.buyerMenu) return []
    const res = JSON.parse(JSON.stringify(state.buyerMenu)) || []
    return res.filter((m) => m.active)
  },
  sellerMenu(state) {
    if (!state.sellerMenu) return []
    const res = JSON.parse(JSON.stringify(state.sellerMenu)) || []
    return res.filter((m) => m.active)
  },
  globalMenu(state) {
    if (!state.globalMenu) return []
    const res = JSON.parse(JSON.stringify(state.globalMenu)) || []
    console.log('globalMenu', JSON.stringify(res, null, 2))
    return res.filter((m) => m.active)
  },
  manageNavBar(state) {
    if (!state.manageNavBar) return []
    const res = JSON.parse(JSON.stringify(state.manageNavBar)) || []
    return res.filter((m) => m.active)
  },
  sellerNavBar(state) {
    if (!state.sellerNavBar) return []
    const res = JSON.parse(JSON.stringify(state.sellerNavBar)) || []
    return res.filter((m) => m.active)
  },
  locales(state) {
    if (!state.locales) return []
    return JSON.parse(JSON.stringify(state.locales))
  },
  locale(state) {
    let res = state.defaultSettings.locale
    if (state.settings && state.settings.locale) {
      res = state.settings.locale
    }
    return res
  },
  fallbackLocale(state) {
    return JSON.parse(JSON.stringify(state.fallbackLocale))
  },
  settings(state) {
    if (!state.defaultSettings) return {}
    const customSettings = state.settings
    const res = JSON.parse(JSON.stringify(state.defaultSettings))
    if (customSettings) mergeObjects(res, customSettings)
    return res
  },
  itemPerPage(state) {
    return parseInt(state.settings.rows_per_page || state.defaultSettings.rows_per_page)
  },
  defaultHeaders: (state) => (tableName) => {
    if (!state.defaultSettings) return {}
    return JSON.parse(JSON.stringify(state.defaultSettings.headers[tableName]))
  },
  headers: (state) => (tableName) => {
    if (!state.defaultSettings) return []
    if (!state.defaultSettings.headers) return []
    if (!state.defaultSettings.headers[tableName]) return []
    const res = JSON.parse(JSON.stringify(state.defaultSettings.headers[tableName]))
    if (!state.settings) return res
    const customHeaders = state.settings.headers
    if (!customHeaders) return res
    const customTableHeaders = state.settings.headers[tableName]
    if (customTableHeaders) mergeObjects(res, customTableHeaders)
    const sortKey = 'order'
    if (Array.isArray(res)) {
      sortArrayByKey(res, sortKey)
    } else {
      Object.keys(res.sub).forEach((subHeader) => {
        sortArrayByKey(res.sub[subHeader], sortKey)
      })
    }
    return res
  }
}
