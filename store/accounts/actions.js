// Action de base

const setMediaEntities = (accountId, medias) => {
  const entityType = 'Account'
  if (!medias) return
  medias.forEach((media) => {
    media.entity_type = entityType
    media.entity_id = accountId
  })
}

const setAccountName = (account) => {
  if (account.type === 'Personal') {
    account.name = `${account.firstname} ${account.lastname}`
  }
}

export default {
  get({ commit, getters }) {
    if (!this.$auth.loggedIn) return
    const request = `given-roles?to_id=${this.$auth.user.sub}`
    this.$axios.$get(request).then((givenRoles) => {
      if (!getters.current && givenRoles.length > 0) {
        const account = parseInt(givenRoles[0].from_id)
        this.$activeAccount.set(account)
      }
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
  add({ dispatch }, account) {
    let owners = []
    if (account.owners) {
      owners = JSON.parse(JSON.stringify(account.owners))
      delete account.owners
    }
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
      const adminRole = {
        from_type: 'Account',
        from_id: newAccountId,
        to_type: 'User',
        to_id: this.$auth.user.sub,
        role: 'admin',
        data: null,
        status: 'Confirmed'
      }
      dispatch('members/add', adminRole, { root: true })
      dispatch('owners/add', owners, { root: true })
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
      name: `${user.given_name} ${user.family_name}`,
      firstname: user.given_name,
      lastname: user.family_name,
      country: 'FRA',
      medias
    }
    console.log('account: ', account)
    dispatch('accounts/add', account, { root: true })
  },
  update({ commit, dispatch }, account) {
    setAccountName(account)
    setMediaEntities(account.id, account.medias)
    let ownersIds = []
    if (account.owners) {
      ownersIds = JSON.parse(JSON.stringify(account.owners))
      console.log('on a des owners: ', ownersIds)
      delete account.owners
    }
    dispatch('owners/removeAll', {}, { root: true }).then(() => {
      dispatch('owners/add', ownersIds, { root: true })
      this.$repos.accounts.update(account).then((res) => {
        commit('remove', res)
        commit('add', res)
      })
    })
  }
}
