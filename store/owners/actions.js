// Action de base
export default {
  async get({ commit }) {
    const activeAccountId = this.$activeAccount.get()
    const request = `accounts?id=${activeAccountId}`
    const accounts = await this.$axios.$get(request)
    const account = accounts[0]
    if (account) {
      const owners = account.owners
      if (owners) {
        commit('set', owners)
      }
    }
  },
}
