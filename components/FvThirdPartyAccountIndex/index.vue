<template lang="pug">
.fv-third-party-account-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='showModal = true'
      ) {{ $t('buttons.create.thirdPartyAccount') }}
    fv-partner-modal(
      :show="showModal"
      :partner='thirdPartyAccount'
      @modal:close="close"
      @modal:save="save"
      @partner:changed="thirdPartyAccountChanged"
    )
  fv-third-party-account-list(@list:selected="selectedThirdPartyAccount")
</template>

<script>
export default {
  data() {
    return {
      thirdPartyAccount: {},
      showModal: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.thirdPartyAccount = {}
      this.showModal = false
    },
    save(e) {
      this.showModal = false
      this.$store.dispatch('thirdPartyAccounts/add', e)
      this.thirdPartyAccount = {}
    },
    selectedThirdPartyAccount(e) {
      this.thirdPartyAccount = JSON.parse(JSON.stringify(e))
      this.showModal = true
    },
    thirdPartyAccountChanged(thirdPartyAccount) {
      this.thirdPartyAccount = thirdPartyAccount
    }
  }
}
</script>
