// Action de base
export default {
  async get({ commit }) {
    let data = await this.$repos.thirdPartyAccounts.indexWithAccountId()
    data = await Promise.all(
      data.map(async (thirdParty) => {
        const account = await this.$repos.accounts.show(thirdParty.flexup_id)
        thirdParty = { ...account, ...thirdParty, name: account.name }
        return thirdParty
      }),
    )
    commit('set', data)
  },
  getAll({ commit }) {
    this.$repos.thirdPartyAccounts.index().then((data) => {
      commit('setAll', data)
    })
  },
  clear({ commit }) {
    commit('set', [])
  },
  remove({ commit }, thirdParty) {
    this.$repos.thirdPartyAccounts.delete(thirdParty.id).then(() => commit('remove', thirdParty))
  },
  async add({ dispatch, commit }, thirdParty) {
    if (Object.prototype.hasOwnProperty.call(thirdParty, 'id')) {
      await dispatch(
        'accounts/updateLocalThirdParty',
        { id: thirdParty.flexup_id, data: thirdParty },
        {
          root: true,
        },
      )
      const payload = {
        id: thirdParty.id,
        type: thirdParty.type,
        flexup_id: thirdParty.flexup_id,
        directory: thirdParty.directory,
        account_id: thirdParty.account_id,
        status: thirdParty.status,
      }
      this.$repos.thirdPartyAccounts.update(payload).then((res) => {
        commit('update', res)
      })
    } else {
      thirdParty.status = 'active'
      if (thirdParty.directory === 'Local') {
        const accountAdded = await dispatch('accounts/addLocalThirdParty', thirdParty, {
          root: true,
        })
        thirdParty.flexup_id = accountAdded.id
      }
      const res = await this.$repos.thirdPartyAccounts.createWithAccountId({
        type: thirdParty.type,
        flexup_id: thirdParty.flexup_id,
        directory: thirdParty.directory,
        status: 'active',
      })
      commit('add', res)
    }
  },
  addFlexupAccount({ commit }, flexupAccountId) {
    const payload = {
      flexup_id: flexupAccountId,
      directory: 'Flexup',
      status: 'active',
    }
    this.$repos.thirdPartyAccounts.createWithAccountId(payload).then((res) => {
      commit('add', res)
    })
  },
  addToFlexup({ _commit }, thirdParty) {
    this.$repos.thirdPartyAccounts.create(thirdParty)
  },
}
