<template lang="pug">
  .fv-order-index
    fv-header-index(
      data-testid="headerIndex"
      :title="$t('table.orders.title')"
      :titleButton="$t('buttons.create.order')"
      @button:click="createOrder"
    )
    fv-my-orders-listing
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('orders/get')
  },
  methods: {
    createOrder() {
      this.$router.push('/orders/new')
    }
  }
}
</script>
