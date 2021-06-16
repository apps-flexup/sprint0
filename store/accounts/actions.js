// Action de base

const setMediaEntities = (accountId, medias) => {
  const entityType = 'Account'
  if (!medias) return
  medias.forEach((media) => {
    media.entity_type = entityType
    media.entity_id = accountId
  })
}

export default {
  get({ commit, dispatch, getters }) {
    if (!this.$auth.loggedIn) return
    const request = `accounts?parent_type=User&parent_id=${this.$auth.user.sub}`
    this.$axios.$get(request).then((data) => {
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
    console.log('on veut creer le compte: ', account)
    account.parent_type = 'Account'
    this.$repos.accounts.create(account).then((res) => {
      const newAccountId = parseInt(res.id)
      dispatch('update', res)
      this.$activeAccount.set(newAccountId)
      const thirdPartyAccount = {
        name: res.name,
        account_id: null
      }
      dispatch('thirdPartyAccounts/addToFlexup', thirdPartyAccount, {
        root: true
      })
      dispatch('settings/createSettings', {}, { root: true })
      const ownerRole = {
        from_type: 'Account',
        from_id: newAccountId,
        to_type: 'User',
        to_id: this.$auth.user.sub,
        role: 'Owner',
        data: null,
        status: 'Confirmed'
      }
      dispatch('members/add', ownerRole, { root: true })
      commit('add', res)
    })
  },
  addPersonalAccount({ dispatch }, user) {
    console.log('user: ', user)
    const emailMedia = {
      description: {
        type: 'Mail',
        value: user.email,
        label: null
      }
    }
    const medias = [emailMedia]
    const account = {
      parent_type: 'User',
      parent_id: user.sub,
      type: 'Personal',
      name: user.name,
      firstname: user.given_name,
      lastname: user.family_name,
      country: 'FRA',
      medias
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
