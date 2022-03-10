<template lang="pug">
  fv-form(
    :payload="getOffer"
    @form:submit="editOffer"
    :action='action'
    :allowEdit="canEditOffer"
    url='offers'
    form='offers'
  )
</template>

<script>
export default {
  props: {
    offer: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    canEditOffer() {
      return this.$rights.canEditOffer()
    },
    action() {
      const res = this.$route.params.action
      return res
    },
    getOffer() {
      const offerId = this.$route.params.id
      const offers = this.$store.getters['offers/findById'](offerId)
      const payload = JSON.parse(JSON.stringify(offers))
      return payload
    },
  },
  methods: {
    editOffer(payload) {
      this.$activeAccount.addOffer(payload)
    },
  },
}
</script>
