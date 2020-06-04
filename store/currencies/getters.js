export default {
  all(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  count(state) {
    if (!state.items) return 0
    return state.items.length
  },
  find: (state) => (id) => {
    if (!state.items) return null
    const items = JSON.parse(JSON.stringify(state.items))
    const res = items.find((item) => parseInt(item.id) === parseInt(id)) || null
    return res ? JSON.parse(JSON.stringify(res)) : null
  },
  items(state) {
    if (!state.items) return []
    const res = JSON.parse(JSON.stringify(state.items))
    return res
  },
  new: (_state) => (options = {}) => {
    const item = {
      id: Date.now()
    }
    const res = Object.assign(item, options)
    return res
  }
}
