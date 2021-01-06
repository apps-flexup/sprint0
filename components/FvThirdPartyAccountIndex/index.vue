<template lang="pug">
.fv-third-party-account-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createThirdPartyAccount'
      ) {{ $t('buttons.create.thirdPartyAccount') }}
  fv-third-party-account-list(@list:selected="selectedThirdPartyAccount")
</template>

<script>
export default {
  data() {
    return {
      thirdPartyAccount: {}
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    // close() {
    //   this.thirdPartyAccount = {}
    //   this.showModal = false
    // },
    // save(e) {
    //   this.showModal = false
    //   this.$store.dispatch('thirdPartyAccounts/add', e)
    //   this.thirdPartyAccount = {}
    // },
    selectedThirdPartyAccount(thirdParty) {
      thirdParty = JSON.parse(JSON.stringify(thirdParty))
      this.$router.push('/thirdPartyAccounts/' + thirdParty.id)
    },
    createThirdPartyAccount() {
      this.$router.push('thirdPartyAccounts/new')
    }
  }
}
</script>
