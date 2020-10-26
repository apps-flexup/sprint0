export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  menu(state) {
    if (!state.menu) return []
    const res = JSON.parse(JSON.stringify(state.menu))
    return res.filter((m) => m.active)
  },
  locales(state) {
    if (!state.locales) return []
    const res = JSON.parse(JSON.stringify(state.locales))
    return res
  },
  locale(state) {
    const res = JSON.parse(JSON.stringify(state.locale))
    return res
  },
  fallbackLocale(state) {
    const res = JSON.parse(JSON.stringify(state.fallbackLocale))
    return res
  },
  settings(state) {
    if (!state.settings) return {}
    const res = JSON.parse(JSON.stringify(state.settings))
    return res
  }
}
