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
  add({ commit, dispatch }, account) {
    account.user_id = this.$auth.user.sub
    this.$repos.accounts.create(account).then((res) => {
      const partner = {
        name: res.name,
        account_id: null
      }
      dispatch('partners/addToFlexup', partner, { root: true })
      commit('add', res)
    })
  },
  update({ commit }, account) {
    const payload = {
      avatar: account.avatar,
      country_id: account.country_id,
      id: account.id,
      name: account.name,
      offers_count: account.offers_count,
      params: account.params,
      parent_id: account.parent_id,
      roles: account.roles,
      roles_methods: account.roles_methods,
      supplier: account.supplier,
      user_id: account.user_id,
      currency: account.currency
    }
    this.$repos.accounts.update(payload).then((res) => {
      commit('remove', res)
      commit('add', res)
    })
  }
}
