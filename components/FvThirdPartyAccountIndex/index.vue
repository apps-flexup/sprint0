<template lang="pug">
.fv-third-party-account-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='showModal = true'
      ) {{ $t('buttons.create.thirdPartyAccount') }}
    fv-partner-modal(
      :show="showModal"
      :partner='partner'
      @modal:close="close"
      @modal:save="save"
      @partner:changed="partnerChanged"
    )
  fv-third-party-account-list(@list:selected="selectedPartner")
</template>

<script>
export default {
  data() {
    return {
      partner: {},
      showModal: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.partner = {}
      this.showModal = false
    },
    save(e) {
      this.showModal = false
      this.$store.dispatch('partners/add', e)
      this.partner = {}
    },
    selectedPartner(e) {
      this.partner = JSON.parse(JSON.stringify(e))
      this.showModal = true
    },
    partnerChanged(partner) {
      this.partner = partner
    }
  }
}
</script>
