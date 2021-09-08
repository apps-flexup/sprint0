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
  computed: {
    offer() {
      const visibility = 'public'
      const settings = this.$activeAccount.settings()
      const vat = settings ? settings.default_vat : undefined
      return {
        visibility,
        vat
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createOffer(payload) {
      this.$activeAccount.addOffer(payload)
    }
  }
}
</script>
