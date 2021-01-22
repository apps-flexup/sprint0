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
  props: {
    offer: {
      type: Object,
      default() {
        return {}
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
