export default {
  setFrom(state, items) {
    console.log('setFrom', items)
    state.from = items
  },
  setTo(state, items) {
    console.log('setTo', items)
    state.to = items
  },
}
