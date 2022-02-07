<template lang="pug">
.fv-third-party-account-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.thirdPartyAccounts.title')"
    :titleButton="$t('buttons.create.thirdPartyAccount')"
    :canCreate="canCreateThirdParty"
    @button:click="createThirdPartyAccount"
  )
  fv-third-party-account-list(
    data-testid='thirdPartyAccountList'
    @list:selected="selectedThirdPartyAccount"
  )
</template>

<script>
export default {
  computed: {
    canCreateThirdParty() {
      return this.$rights.canCreateThirdParty()
    },
  },
  methods: {
    selectedThirdPartyAccount(thirdParty) {
      if (thirdParty.directory === 'Local') {
        this.$router.push('/thirdPartyAccounts/' + thirdParty.id)
      } else {
        this.$router.push('/accounts/' + thirdParty.flexup_id)
      }
    },
    createThirdPartyAccount() {
      this.$router.push('thirdPartyAccounts/new')
    },
  },
}
</script>
