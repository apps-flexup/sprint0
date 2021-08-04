const rights = (ctx) => ({
  canEditOwners() {
    const userId = ctx.$auth.user.sub
    const accountId = ctx.$activeAccount.get()
    const role = ctx.store.getters['members/roleFor'](accountId, userId)
    return role.includes('admin')
  }
})

export default (ctx, inject) => {
  inject('rights', rights(ctx))
}
