// Action de base
export default {
  async get({ commit }) {
    let data = await this.$repos.thirdPartyAccounts.indexWithAccountId()
    data = await Promise.all(
      data.map(async (thirdParty) => {
        if (thirdParty.flexup_id) {
          const account = await this.$repos.accounts.show(thirdParty.flexup_id)
          thirdParty = { ...thirdParty, type: account.type, name: account.name }
        }
        return thirdParty
      })
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
    this.$repos.thirdPartyAccounts
      .delete(thirdParty.id)
      .then(() => commit('remove', thirdParty))
  },
  add({ commit }, thirdParty) {
    if (thirdParty.type === 'Personal') {
      const firstname = thirdParty.firstname
      const lastname = thirdParty.lastname
      thirdParty.name = [firstname, lastname].join(' ').trim()
    }
    if (Object.prototype.hasOwnProperty.call(thirdParty, 'id')) {
      this.$repos.thirdPartyAccounts.update(thirdParty).then((res) => {
        commit('update', res)
      })
    } else {
      thirdParty.status = 'active'
      this.$repos.thirdPartyAccounts
        .createWithAccountId(thirdParty)
        .then((res) => {
          commit('add', res)
        })
    }
  },
  addFlexupAccount({ commit }, flexupAccountId) {
    const payload = { flexup_id: flexupAccountId, directory: 'Flexup' }
    this.$repos.thirdPartyAccounts.createWithAccountId(payload).then((res) => {
      commit('add', res)
    })
  },
  addToFlexup({ _commit }, thirdParty) {
    this.$repos.thirdPartyAccounts.create(thirdParty)
  }
}
