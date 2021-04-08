import { mergeObjects, sortArrayByKey } from '~/plugins/utils'

export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
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
  accountMenu(state) {
    if (!state.accountMenu) return []
    const res = JSON.parse(JSON.stringify(state.accountMenu))
    return res.filter((m) => m.active)
  },
  buyerMenu(state) {
    if (!state.buyerMenu) return []
    const res = JSON.parse(JSON.stringify(state.buyerMenu))
    return res.filter((m) => m.active)
  },
  sellerMenu(state) {
    if (!state.sellerMenu) return []
    const res = JSON.parse(JSON.stringify(state.sellerMenu))
    return res.filter((m) => m.active)
  },
  globalMenu(state) {
    if (!state.globalMenu) return []
    const res = JSON.parse(JSON.stringify(state.globalMenu))
    return res.filter((m) => m.active)
  },
  manageNavBar(state) {
    if (!state.manageNavBar) return []
    const res = JSON.parse(JSON.stringify(state.manageNavBar))
    return res.filter((m) => m.active)
  },
  sellerNavBar(state) {
    if (!state.sellerNavBar) return []
    const res = JSON.parse(JSON.stringify(state.sellerNavBar))
    return res.filter((m) => m.active)
  },
  locales(state) {
    if (!state.locales) return []
    const res = JSON.parse(JSON.stringify(state.locales))
    return res
  },
  locale(state) {
    let res = state.defaultSettings.locale
    if (state.settings && state.settings.locale) {
      res = state.settings.locale
    }
    return res
  },
  fallbackLocale(state) {
    const res = JSON.parse(JSON.stringify(state.fallbackLocale))
    return res
  },
  settings(state) {
    if (!state.defaultSettings) return {}
    const customSettings = state.settings
    const res = JSON.parse(JSON.stringify(state.defaultSettings))
    if (customSettings) mergeObjects(res, customSettings)
    return res
  },
  defaultHeaders: (state) => (tableName) => {
    if (!state.defaultSettings) return {}
    const res = JSON.parse(
      JSON.stringify(state.defaultSettings.headers[tableName])
    )
    return res
  },
  headers: (state) => (tableName) => {
    if (!state.defaultSettings) return []
    if (!state.defaultSettings.headers) return []
    if (!state.defaultSettings.headers[tableName]) return []
    const res = JSON.parse(
      JSON.stringify(state.defaultSettings.headers[tableName])
    )
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
