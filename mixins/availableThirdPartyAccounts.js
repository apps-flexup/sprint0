export default {
  methods: {
    async getAvailableThirdParties() {
      const localThirdParties = this.getLocalThirdParties()
      const flexupThirdParties = await this.getFlexupThirdParties()
      const allFlexupAccounts = await this.getFlexupAccounts()
      const flexupAccounts = this.removeFlexupThirdPartiesFromFlexupAccounts(flexupThirdParties, allFlexupAccounts)
      return {
        flexupThirdParties,
        localThirdParties,
        flexupAccounts,
      }
    },
    getLocalThirdParties() {
      const localThirdParties = this.$store.getters['thirdPartyAccounts/local']
      return localThirdParties
    },
    async getFlexupThirdParties() {
      let flexupThirdParties = this.$store.getters['thirdPartyAccounts/flexup']
      flexupThirdParties = await Promise.all(
        flexupThirdParties.map(async (thirdParty) => {
          const account = await this.$directory.getAccountById(thirdParty.flexup_id)
          return {
            type: account.type,
            name: account.name,
            avatar: account.avatar,
            ...thirdParty,
          }
        }),
      )
      return flexupThirdParties
    },
    async getFlexupAccounts() {
      let allAccounts = await this.$directory.allAccounts()
      allAccounts = allAccounts.map((account) => {
        return {
          id: parseInt(account.id),
          type: account.type,
          name: account.name,
          avatar: account.avatar,
        }
      })
      return allAccounts.filter((account) => account.id !== this.$activeAccount.get())
    },
    removeFlexupThirdPartiesFromFlexupAccounts(thirdParties, allAccounts) {
      const res = allAccounts.filter((account) => {
        return !thirdParties.filter((thirdParty) => thirdParty.flexup_id === account.id).length
      })
      return res
    },
  },
}
