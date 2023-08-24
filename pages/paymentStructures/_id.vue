<template lang="pug">
  fv-form(
    :payload="getPaymentStructure"
    @form:submit="editPaymentStructure"
    action='edit'
    url='paymentStructures'
    form='paymentStructures'
  )
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    getPaymentStructure() {
      const paymentStructureId = this.$route.params.id
      const paymentStructure = this.$store.getters['paymentStructures/findById'](paymentStructureId)
      const payload = JSON.parse(JSON.stringify(paymentStructure))
      return payload
    }
  },
  methods: {
    editPaymentStructure(payload) {
      console.log('edit: ', payload)
      this.$activeAccount.addPaymentStructure(payload)
    }
  }
}
</script>
