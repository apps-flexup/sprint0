<template lang="pug">
.page.third-party-account-new
  h3 Ajouter depuis l'annuaire flexup
  fv-available-third-party-account-list
  h3 Ajouter un tiers localement
  fv-text-button(
      data-testid="addNewLocalThirdParty"
      @button:click="addNewLocalThirdParty"
    )
      template(v-slot:icon)
        fv-icon(
          size="small"
          icon="mdi-plus"
          color="#1976d2"
          @icon:clicked="addNewLocalThirdParty"
        )
      template(v-slot:text)
        | {{ $t('forms.thirdPartyAccounts.new.title') }}
</template>

<script>
export default {
  data() {
    return {
      items: []
    }
  },
  mounted() {
    this.$repos.accounts.index().then((accounts) => {
      const activeAccountId = this.$activeAccount.get()
      accounts = accounts.filter((account) => account.id !== activeAccountId)
      this.items = accounts
    })
  },
  methods: {
    addThirdParty(id) {
      this.$store.dispatch('thirdPartyAccounts/addFlexupAccount', id)
    },
    addNewLocalThirdParty() {
      this.$router.push('/thirdPartyAccounts/newLocalThirdParty')
    }
  }
}
</script>
