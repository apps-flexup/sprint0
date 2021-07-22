// Action de base
export default {
  get({ commit }) {
    return this.$repos.givenRoles.index().then((givenRoles) => {
      const activeAccountId = this.$activeAccount.get()
      const activeAccountMembers = givenRoles.filter((givenRole) => {
        const isAccount = givenRole.from_type === 'Account'
        const isActiveAccount = givenRole.from_id === activeAccountId
        const isOwner = givenRole.role === 'owner'
        return isAccount && isActiveAccount && isOwner
      })
      commit('set', activeAccountMembers)
    })
  },
  addOne({ commit }, givenRole) {
    this.$repos.givenRoles.create(givenRole).then((res) => {
      commit('add', res)
    })
  },
  remove({ commit }, member) {
    this.$repos.givenRoles
      .delete(member.id)
      .then(() => commit('remove', member))
  },
  removeAll({ dispatch, state }) {
    state.items.forEach((owner) => dispatch('remove', owner))
  },
  add({ dispatch }, ownersIds) {
    const accountId = this.$activeAccount.get()
    ownersIds.forEach((ownerId) => {
      const ownerRole = {
        from_type: 'Account',
        from_id: accountId,
        to_type: 'Account',
        to_id: ownerId,
        role: 'owner',
        data: null,
        status: 'WaitingConfirmation'
      }
      dispatch('addOne', ownerRole)
    })
  }
}
