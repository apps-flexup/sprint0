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
  async addOne({ commit }, givenRole) {
    console.log('on ajoute: ', givenRole)
    const res = await this.$repos.givenRoles.create(givenRole)
    commit('add', res)
    console.log('on a ajoute: ', res)
  },
  async remove({ commit }, owner) {
    await this.$repos.givenRoles.delete(owner.id)
    commit('remove', owner)
    console.log('on a bien remove le owner: ', owner)
  },
  async removeAll({ dispatch, state }) {
    console.log('on remove tous les owners')
    for (const owner of state.items) {
      const res = await dispatch('remove', owner)
      await new Promise((resolve) => setTimeout(resolve, 5))
      console.log('delete res: ', res)
    }
    console.log('ok on a tout remove')
  },
  async add({ dispatch }, owners) {
    console.log('on ajoute les nouveaux owners')
    const accountId = this.$activeAccount.get()
    for (const owner of owners) {
      owner.from_id = accountId
      await dispatch('addOne', owner)
      await new Promise((resolve) => setTimeout(resolve, 5))
    }
  },
  async update({ dispatch }, owners) {
    console.log('on update les owners')
    await dispatch('removeAll')
    console.log('maintenant on peut add: ', owners)
    await dispatch('add', owners)
    console.log('on a bien fini de add')
  }
}
