// Action de base

const setMediaEntities = (accountId, medias) => {
  const entityType = 'Account'
  medias.forEach((media) => {
    media.entity_type = entityType
    media.entity_id = accountId
  })
}

export default {
  get({ commit, dispatch, getters }) {
    if (!this.$auth.loggedIn) return
    this.$axios.$get(`accounts?user_id=${this.$auth.user.sub}`).then((data) => {
      commit('set', data)
      if (!getters.current && data.length > 0) {
        // if (this.$auth.user.last_account ^ data.length > 0) {
        const account = parseInt(data[0].id)
        this.$activeAccount.set(account)
      }
      dispatch('getSharedAccounts')
    })
  },
  getSharedAccounts({ commit }) {
    this.$axios
      .$get(`given-roles?to_id=${this.$auth.user.sub}`)
      .then((givenRoles) => {
        givenRoles.forEach((givenRole) => {
          const accountId = givenRole.from_id
          this.$axios.$get(`accounts?id=${accountId}`).then((accounts) => {
            commit('add', accounts[0])
          })
        })
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
    console.log('on veut creer le compte: ', account)
    this.$repos.accounts.create(account).then((res) => {
      dispatch('update', res)
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
  addPersonalAccount({ dispatch }, user) {
    console.log('user: ', user)
    const account = {
      parent_type: 'User',
      parent_id: user.sub,
      type: 'Personal',
      name: user.name,
      firstname: user.given_name,
      lastname: user.family_name,
      country: 'FRA'
    }
    console.log('account: ', account)
    dispatch('accounts/add', account, { root: true })
  },
  update({ commit }, account) {
    setMediaEntities(account.id, account.medias)
    this.$repos.accounts.update(account).then((res) => {
      commit('remove', res)
      commit('add', res)
    })
  }
}
