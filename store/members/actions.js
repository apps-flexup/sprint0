// Action de base
export default {
  get({ commit }) {
    return this.$repos.givenRoles.index().then((data) => {
      const activeAccountId = this.$activeAccount.get()
      const activeAccountMembers = data.filter((givenRole) => {
        const isActiveAccount = givenRole.from_id === activeAccountId
        const isOwner = givenRole.role === 'owner'
        return isActiveAccount && !isOwner
      })
      commit('set', activeAccountMembers)
    })
  },
  async add({ commit }, givenRole) {
    const res = await this.$repos.givenRoles.create(givenRole)
    commit('add', res)
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
