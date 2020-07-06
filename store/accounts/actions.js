// Action de base
export default {
  get({ commit }) {
    if (!this.$auth.loggedIn) return
    this.$axios.$get(`accounts?user_id=${this.$auth.user.sub}`).then((data) => {
      commit('set', data)
      // Si data.length > 0
      if (data.length > 0) {
        // if (this.$auth.user.last_account ^ data.length > 0) {
        const account = parseInt(data[0].id)
        this.$activeAccount.set(account)
      } else {
        this.app.router.push('/account/new')
      }
    })
  },
  clear({ commit }) {
    commit('clear')
  },
  setCurrent({ commit }, id) {
    commit('setCurrent', id)
  },
  add({ commit }, account) {
    account.user_id = this.$auth.user.sub
    this.$repos.accounts.create(account).then((res) => {
      commit('add', res)
    })
  }
}
