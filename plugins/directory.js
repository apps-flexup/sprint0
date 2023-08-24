const directory = (ctx) => ({
  async naturalPersons() {
    const request = '/accounts?type=Personal'
    const res = await ctx.$axios.$get(request)
    return res
  },
  async juridicalPersons() {
    const request = '/accounts?type=Business'
    const res = await ctx.$axios.$get(request)
    return res
  },
  async subAccounts() {
    const request = '/accounts?type=SubAccount'
    const res = await ctx.$axios.$get(request)
    return res
  },
  async mainAccounts() {
    const naturalPersons = await this.naturalPersons()
    const juridicalPersons = await this.juridicalPersons()
    const res = naturalPersons.concat(juridicalPersons)
    return res
  },
  async allAccounts() {
    const mainAccounts = await this.mainAccounts()
    const subAccounts = await this.subAccounts()
    const res = mainAccounts.concat(subAccounts)
    return res
  },
  async personalAccountForUser(userUuid) {
    const request = `/accounts?type=Personal&parent_id=${userUuid}`
    const res = await ctx.$axios.$get(request)
    if (!res) return null
    return res[0]
  },
  async getAccountById(id) {
    const accountRequest = `/accounts?id=${id}`
    const accounts = await ctx.$axios.$get(accountRequest)
    if (!accounts) return null
    const account = accounts[0]
    if (!account) return null
    return account
  },
  async getThirdPartyById(id) {
    const thirdPartyRequest = `/third-party-accounts?id=${id}`
    const thirdPartys = await ctx.$axios.$get(thirdPartyRequest)
    if (!thirdPartys) return null
    const thirdParty = thirdPartys[0]
    return thirdParty
  }
})

export default (ctx, inject) => {
  inject('directory', directory(ctx))
}
