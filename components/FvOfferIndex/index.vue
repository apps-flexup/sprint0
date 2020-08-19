<template lang="pug">
.fv-offer-index
  v-row
    v-col(cols="12")
      fv-create-button.text-right(
        @button:click='showModal = true'
      ) {{ $t('buttons.create.offer') }}
      fv-offer-modal(
        :show="showModal"
        :offer='offer'
        @modal:close="close"
        @modal:save="save"
        @offer:changed="offerChanged"
      )
  fv-offer-list(@list:selected="selectedOffer")
</template>

<script>
export default {
  data() {
    return {
      offer: {},
      showModal: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.offer = {}
      this.showModal = false
    },
    save() {
      this.$nuxt.$loading.start()
      this.showModal = false
      this.$activeAccount.addOffer(this.offer)
      this.offer = {}
      this.$nuxt.$loading.finish()
    },
    selectedOffer(offer) {
      this.offer = JSON.parse(JSON.stringify(offer))
      console.log('SelectedOffer: ', offer)
      this.showModal = true
    },
    offerChanged(offer) {
      this.offer = offer
    }
  }
}
</script>
