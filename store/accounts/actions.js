// Action de base

const setMediaEntities = (accountId, medias) => {
  if (!medias) return
  medias.forEach((media) => {
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
  async add({ dispatch, commit }, account) {
    if (account.type === 'SubAccount') {
      account.owners.forEach((owner) => {
        owner.from_type = 'Account'
      })
    }
    const res = await this.$repos.accounts.create(account)
    commit('add', res)
    const newAccountId = parseInt(res.id)
    this.$activeAccount.set(newAccountId)
    const adminRole = {
      from_type: 'Account',
      from_id: newAccountId,
      to_type: 'User',
      to_id: this.$auth.user.sub,
      role: 'admin',
      data: null,
      status: 'Confirmed',
    }
    dispatch('members/add', adminRole, { root: true })
    const thirdPartyAccount = {
      name: res.name,
      account_id: null,
    }
    dispatch('thirdPartyAccounts/addToFlexup', thirdPartyAccount, {
      root: true,
    })
    dispatch('settings/createSettings', {}, { root: true })
  },
  addPersonalAccount({ dispatch }, user) {
    const emailMedia = {
      description: {
        type: 'Mail',
        value: user.email,
        label: null,
      },
    }
    const medias = [emailMedia]
    const account = {
      parent_type: 'User',
      parent_id: user.sub,
      type: 'Personal',
      name: [user.given_name, user.family_name].join(' ').trim(),
      firstname: user.given_name,
      lastname: user.family_name,
      country: 'FRA',
      medias,
    }
    dispatch('accounts/add', account, { root: true })
  },
  async update({ commit }, account) {
    setAccountName(account)
    setMediaEntities(account.id, account.medias)
    const res = await this.$repos.accounts.update(account)
    commit('remove', res)
    commit('add', res)
  },
  async addLocalThirdParty({ _commit }, thirdParty) {
    const account = {
      type: 'ThirdParty',
      name: thirdParty.name,
      medias: thirdParty.medias,
      owners: thirdParty.owners,
    }
    if (thirdParty.type === 'Personal') {
      account.firstname = thirdParty.firstname
      account.lastname = thirdParty.lastname
    } else if (thirdParty.type === 'Business') {
      account.country = thirdParty.country
      account.description = thirdParty.description
      account['legal-structure-id'] = thirdParty['legal-structure-id']
      account.siret = thirdParty.siret
    }
    return await this.$repos.accounts.createWithAccountId(account)
  },
  async updateLocalThirdParty({ _commit }, payload) {
    const account = await this.$repos.accounts.show(payload.id)
    if (payload.data.type === 'Personal') {
      const { firstname, lastname } = payload.data
      account.name = [firstname, lastname].join(' ').trim()
      account.firstname = firstname
      account.lastname = lastname
    } else {
      const { name, description, country } = payload.data
      account.name = name
      account.description = description
      account.country = country
      if (payload.data.type === 'Business') {
        const { 'legal-structure-id': legalStructureId, siret } = payload.data
        account['legal-structure-id'] = legalStructureId
        account.siret = siret
      } else {
        const { owners } = payload.data
        account.owners = owners
      }
    }
    account.medias = payload.data.medias
    return await this.$repos.accounts.update(account)
  },
}
