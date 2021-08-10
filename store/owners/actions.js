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
  add({ dispatch }, owners) {
    const accountId = this.$activeAccount.get()
    owners.forEach((owner) => {
      owner.from_id = accountId
      dispatch('addOne', owner)
    })
  },
  update({ dispatch }, owners) {
    dispatch('removeAll').then(() => {
      dispatch('add', owners)
    })
  }
}
