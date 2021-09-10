const rights = (ctx) => ({
  getCurrentRoles() {
    const userId = ctx.$auth.user.sub
    const accountId = ctx.$activeAccount.get()
    return ctx.store.getters['members/roleFor'](accountId, userId)
  },
  canInviteMember() {
    const roles = this.getCurrentRoles()
    return roles.includes('admin')
  },
  canEditOwners() {
    const roles = this.getCurrentRoles()
    return roles.includes('admin')
  },
  canCreateProduct() {
    const roles = this.getCurrentRoles()
    return roles.includes('admin') || roles.includes('editor')
  },
  canEditProduct() {
    const roles = this.getCurrentRoles()
    return roles.includes('admin') || roles.includes('editor')
  },
  canDeleteProduct() {
    const roles = this.getCurrentRoles()
    return roles.includes('admin') || roles.includes('editor')
  },
  canCreateOffer() {
    const roles = this.getCurrentRoles()
    return roles.includes('admin') || roles.includes('editor')
  }
})

export default (ctx, inject) => {
  inject('rights', rights(ctx))
}
