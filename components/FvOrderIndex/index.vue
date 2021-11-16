<template lang="pug">
.fv-order-index
  fv-header-index(
    data-testid="headerIndex"
    :title="$t('table.orders.title')"
    :titleButton="$t('buttons.create.order')"
    @button:click="createOrder"
  )
    fv-order-modal(
      data-testid="orderModal"
      :show="showModal"
      :order="order"
      @modal:close="close"
      @modal:save="save"
      @order:changed="orderChanged"
    )
  fv-order-list(
    data-testid="orderList"
    @list:selected="selectedOrder"
  )
</template>

<script>
export default {
  data() {
    return {
      order: {},
      showModal: false
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('orders/get')
  },
  methods: {
    close() {
      this.order = {}
      this.showModal = false
    },
    save() {
      this.$nuxt.$loading.start()
      this.showModal = false
      this.$activeAccount.addOrder(this.order)
      this.order = {}
      this.$nuxt.$loading.finish()
    },
    createOrder() {
      this.$router.push('/orders/new')
    },
    selectedOrder(order) {
      const orderId = order.id
      const tmp = this.$store.getters['orders/find'](orderId)
      this.order = JSON.parse(JSON.stringify(tmp))
      this.showModal = true
    },
    orderChanged(order) {
      this.order = order
    }
  }
}
</script>
