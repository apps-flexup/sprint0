// Action de base
export default {
  get({ commit }) {
    if (!this.$auth.loggedIn) return
    this.$axios.$get(`accounts?user_id=${this.$auth.user.sub}`).then((data) => {
      commit('set', data)
      // Si data.length > 0
      if (data.length > 0) {
        // if (this.$auth.user.last_account ^ data.length > 0) {
        console.log('dernier compte actif')
        // commit('setCurrent', parseInt(this.$auth.user.last_account))
        const account = data[0]
        commit('setCurrent', parseInt(account.id))
      } else {
        console.log('pas de compte')
        this.app.router.push('account/new')
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
