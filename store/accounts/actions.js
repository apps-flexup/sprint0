// Action de base
export default {
  get({ commit, getters }) {
    if (!this.$auth.loggedIn) return
    this.$axios.$get(`accounts?user_id=${this.$auth.user.sub}`).then((data) => {
      commit('set', data)
      if (!getters.current && data.length > 0) {
        // if (this.$auth.user.last_account ^ data.length > 0) {
        const account = parseInt(data[0].id)
        this.$activeAccount.set(account)
      } else if (!getters.current) {
        this.app.router.push('/accounts/new')
      }
    })
  },
  clear({ commit }) {
    commit('clear')
  },
  setCurrent({ commit }, id) {
    commit('setCurrent', id)
  },
  add({ commit, dispatch }, account) {
    account.user_id = this.$auth.user.sub
    this.$repos.accounts.create(account).then((res) => {
      this.$activeAccount.set(res.id)
      const thirdPartyAccount = {
        name: res.name,
        account_id: null
      }
      dispatch('thirdPartyAccounts/addToFlexup', thirdPartyAccount, {
        root: true
      })
      dispatch('settings/createSettings', {}, { root: true })
      commit('add', res)
    })
  },
  update({ commit }, account) {
    this.$repos.accounts.update(account).then((res) => {
      commit('remove', res)
      commit('add', res)
    })
  }
}
