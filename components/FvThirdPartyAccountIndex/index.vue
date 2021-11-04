<template lang="pug">
.fv-third-party-account-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.thirdPartyAccounts.title')"
    :titleButton="$t('buttons.create.thirdPartyAccount')"
    @button:click="createThirdPartyAccount"
  )
  fv-third-party-account-list(
    data-testid='thirdPartyAccountList'
    @list:selected="selectedThirdPartyAccount"
  )
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selectedThirdPartyAccount(thirdParty) {
      this.$router.push('/thirdPartyAccounts/' + thirdParty.id)
    },
    createThirdPartyAccount() {
      this.$router.push('thirdPartyAccounts/new')
    }
  }
}
</script>
