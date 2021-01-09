<template lang="pug">
.fv-order-form
  p {{ $options.name }}
  v-row(
    v-for="i in nbOrders"
    :key="i"
  )
    v-col(cols="12")
      fv-order-for-third-party-account(
        :i="i"
        :order="orderList[i]"
        @order:thirdPartyAccountSelected="thirdPartyAccountSelected"
        @order:orderLinesChanged="orderLinesChanged"
        @order:remove="removeOrder"
        @order:labelChanged="labelChanged"
        @order:dateChanged="dateChanged"
        @order:structureSelected="structureChanged"
      )
  v-row(v-if="nbOrders > 1")
      v-spacer
      v-col(cols="5")
        fv-order-totals(
          :orderLines="allOrderLines"
        )
  v-row
    v-col(cols="12")
      fv-secondary-button.text-right(
        @button:click="addNewOrder"
      ) {{ $t('forms.orders.new.addThirdPartyAccount') }}
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        @button:click="validateOrders"
      ) {{ $t('forms.orders.new.validate') }}
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
    labelChanged(i, label) {
      if (!this.orderList[i]) {
        this.orderList[i] = {}
      }
      this.orderList[i].label = label
    },
    structureChanged(i, structureId) {
      if (!this.orderList[i]) {
        this.orderList[i] = {}
      }
      this.orderList[i].structureId = structureId
    },
    thirdPartyAccountSelected(i, thirdPartyAccountId) {
      if (!this.orderList[i]) {
        this.orderList[i] = {}
      }
      this.orderList[i].thirdPartyAccountId = thirdPartyAccountId
      this.orderList[i].orderLines = []
    },
    dateChanged(i, dte) {
      if (!this.orderList[i]) {
        this.orderList[i] = {}
      }
      this.orderList[i].dte = dte
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
      this.orderList.forEach((order) => {
        if (order.orderLines) {
          let totalAmount = 0
          order.orderLines.forEach((orderLine) => {
            totalAmount += orderLine.amount()
          })
          const payload = {
            third_party_account_id: order.thirdPartyAccountId,
            date: order.dte,
            label: order.label ? order.label : null,
            order_lines: order.orderLines,
            structure: order.structureId,
            amount: totalAmount,
            status: 'draft',
            currency: 'EUR'
          }
          console.log('Payload:', payload)
          this.$store.dispatch('orders/add', payload)
        }
      })
      this.$router.push('/orders')
    }
  }
}
</script>
