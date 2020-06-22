// Action de base
export default {
  get(context) {
    // charger les contracts
    console.log('get', context)
    // this.$repos.contacts.index().then((data) => commit('set', data))
  },
  clear(context) {
    // charger les contracts
    console.log('clear', context)
    // this.$repos.contacts.index().then((data) => commit('set', data))
  }
}
