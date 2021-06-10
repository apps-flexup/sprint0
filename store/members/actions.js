// Action de base
export default {
  get({ commit }) {
    return this.$repos.givenRoles.index().then((data) => {
      const activeAccountId = this.$activeAccount.get()
      const activeAccountMembers = data.filter((givenRole) => {
        const isAccount = givenRole.from_type === 'Account'
        const isActiveAccount = givenRole.from_id === activeAccountId
        return isAccount && isActiveAccount
      })
      commit('set', activeAccountMembers)
    })
  },
  add({ commit }, givenRole) {
    this.$repos.givenRoles.create(givenRole).then((res) => {
      commit('add', res)
    })
  },
  update({ commit }, member) {
    this.$repos.givenRoles.update(member).then((res) => {
      commit('remove', res)
      commit('add', res)
    })
  },
  remove({ commit }, member) {
    this.$repos.givenRoles
      .delete(member.id)
      .then(() => commit('remove', member))
  }
}
