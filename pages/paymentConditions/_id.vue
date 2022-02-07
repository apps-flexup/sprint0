<template lang="pug">
  fv-form(
    :payload="getPaymentCondition"
    @form:submit="editPaymentCondition"
    action='edit'
    url='paymentConditions'
    form='paymentConditions'
  )
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    getPaymentCondition() {
      const paymentConditionId = this.$route.params.id
      const paymentCondition = this.$store.getters['paymentConditions/findById'](paymentConditionId)
      const payload = JSON.parse(JSON.stringify(paymentCondition))
      return payload
    },
  },
  methods: {
    editPaymentCondition(payload) {
      this.$activeAccount.addPaymentCondition(payload)
    },
  },
}
</script>
