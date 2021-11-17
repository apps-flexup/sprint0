const rights = (ctx) => ({
  getCurrentRoles() {
    const userId = ctx.$auth.user.sub
    const accountId = ctx.$activeAccount.get()
    return ctx.store.getters['members/roleFor'](accountId, userId)
  },
  isAuthorized(authorizedRoles) {
    return authorizedRoles.some((role) => this.getCurrentRoles().includes(role))
  },
  canInviteMember() {
    const authorizedRoles = ['admin']
    return this.isAuthorized(authorizedRoles)
  },
  canEditOwners() {
    const authorizedRoles = ['admin']
    return this.isAuthorized(authorizedRoles)
  },
  canCreateProduct() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canEditProduct() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canDeleteProduct() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canCreateOffer() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canEditOffer() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canDeleteOffer() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canCreateThirdParty() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canEditThirdParty() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  },
  canDeleteThirdParty() {
    const authorizedRoles = ['admin', 'editor']
    return this.isAuthorized(authorizedRoles)
  }
})

export default (ctx, inject) => {
  inject('rights', rights(ctx))
}
