<template lang="pug">
.page-offer-new
  fv-form(
    :payload="offer"
    @form:submit="createOffer"
    url='offers'
    form='offers'
    action='new'
  )
</template>

<script>
export default {
  data() {
    return {
      localOffer: this.offer
    }
  },
  computed: {
    offer() {
      const visibility = 'public'
      const settings = this.$activeAccount.settings()
      const vat = settings ? settings.default_vat : undefined
      const currency = settings.currency
      return {
        visibility,
        vat,
        currency,
        status: 'active'
      }
    }
  },
  methods: {
    createOffer(payload) {
      this.$activeAccount.addOffer(payload)
    }
  }
}
</script>
