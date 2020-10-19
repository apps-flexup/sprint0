export default {
  set(state, items) {
    state.items = items
  },
  setMenu(state, items) {
    state.menu = items
  },
  setSettings(state, items) {
    state.settings = items
  },
  addSetting(state, item) {
    state.settings.push(item)
  },
  removeSetting(state, item) {
    state.items = state.items.filter((v) => v.id !== item.id)
  }
}
