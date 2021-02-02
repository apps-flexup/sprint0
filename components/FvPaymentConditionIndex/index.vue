<template lang="pug">
.fv-payment-contidion-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createPaymentCondition'
      ) {{ $t('buttons.create.paymentCondition') }}
  //- fv-product-list(@list:selected="selectedProduct")
</template>

<script>
export default {
  name: 'FvPaimentConditionIndex',
  methods: {
    // selectedProduct(product) {
    //   product = JSON.parse(JSON.stringify(product))
    //   this.$router.push('/products/' + product.id)
    // },
    createPaymentCondition() {
      console.log('create payment condition')
      this.$router.push('/paymentConditions/new')
    }
  }
}
</script>
