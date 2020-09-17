<template lang="pug">
.fv-order-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click='createOrder'
      ) {{ $t('buttons.create.order') }}
      fv-order-modal(
        :show="showModal"
        :order="order"
        @modal:close="close"
        @modal:save="save"
        @order:changed="orderChanged"
      )
  fv-order-list(@list:selected="selectedOrder")
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
      this.order = JSON.parse(JSON.stringify(order))
      console.log('SelectedOrder: ', order)
      this.showModal = true
    },
    orderChanged(order) {
      this.order = order
    }
  }
}
</script>
