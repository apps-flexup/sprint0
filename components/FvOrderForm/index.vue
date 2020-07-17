<template lang="pug">
  .fv-order-form
    p {{ $options.name }}
    v-row(
      v-for="i in nbOrders"
      :key="i"
    )
      v-col(cols="12")
        fv-order-for-partner(
          :i="i"
          :order="orderList[i]"
          @order:partnerSelected="partnerSelected"
          @order:orderLinesChanged="orderLinesChanged"
          @order:remove="removeOrder"
        )
    v-row(v-if="nbOrders > 1")
        v-spacer
        v-col(cols="5")
          fv-order-totals(
            :orderLines="allOrderLines"
          )
    v-row
      v-btn(@click="addNewOrder") Order for new partner
    v-row
      v-btn(@click="validateOrders") validate
</template>

<script>
export default {
  name: 'FvOrderForm',
  data() {
    return {
      orderList: [],
      allOrderLines: [],
      nbOrders: 1
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    addNewOrder() {
      this.nbOrders++
    },
    partnerSelected(i, partnerId) {
      if (!this.orderList[i]) {
        this.orderList[i] = {}
      }
      this.orderList[i].partnerId = partnerId
      this.orderList[i].orderLines = []
    },
    orderLinesChanged(i, orderLines) {
      this.orderList[i].orderLines = orderLines
      this.computeAllOrderLines()
    },
    removeOrder(i) {
      this.orderList.splice(i, 1)
      this.computeAllOrderLines()
      if (this.nbOrders > 1) {
        this.nbOrders--
      }
    },
    computeAllOrderLines() {
      this.allOrderLines = []
      this.orderList.forEach((order) => {
        this.allOrderLines = this.allOrderLines.concat(order.orderLines)
      })
    },
    validateOrders() {
      console.log('orders: ', this.orderList)
    }
  }
}
</script>
