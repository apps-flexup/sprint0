<template lang="pug">
.fv-third-party-account-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        v-if="canCreateThirdParty"
        data-testid='createBtn'
        @button:click='createThirdPartyAccount'
      ) {{ $t('buttons.create.thirdPartyAccount') }}
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
    }
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
    }
  }
}
</script>
