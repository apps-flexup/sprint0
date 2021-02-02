<template lang="pug">
.payment-condition-page-new
  fv-form(
    :payload='paymentCondition'
    @form:submit="createPaymentCondition"
    url='paymentConditions'
    form='paymentConditions'
    action='new'
  )
</template>

<script>
export default {
  data() {
    return {
      paymentCondition: {}
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createPaymentCondition(payload) {
      console.log('Create payment condition: ', payload)
      // this.$activeAccount.addProduct(payload)
    }
  }
}
</script>
