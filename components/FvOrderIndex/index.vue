<template lang="pug">
.fv-order-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.orders.title')"
    :titleButton="$t('buttons.create.order')"
    @button:click="createOrder"
  )
  fv-my-orders-listing
  fv-order-list(
    data-testid="orderList"
    @list:selected="selectedOrder"
  )
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('orders/get')
  },
  methods: {
    createOrder() {
      this.$router.push('/orders/new')
    },
    selectedOrder(order) {
      const orderId = order.id
      const tmp = this.$store.getters['orders/find'](orderId)
      console.log('Show order: ', tmp)
    }
  }
}
</script>
