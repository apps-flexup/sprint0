export default {
  setFrom(state, items) {
    state.from = items
  },
  setTo(state, items) {
    state.to = items
  },
  set(state, message) {
    console.log('State :', state)
    console.log('Message :', message)
  }
}
