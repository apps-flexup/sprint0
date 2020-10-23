export default {
  set(state, items) {
    state.items = items
  },
  setMenu(state, items) {
    state.menu = items
  },
  setSettings(state, item) {
    state.settings = item
    this.app.i18n.locale = item.language
    this.app.vuetify.framework.theme.dark = item.theme === 'dark'
  }
}
