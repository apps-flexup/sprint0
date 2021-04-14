<template lang="pug">
.fv-third-party-account-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
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
