<template lang="pug">
  .fv-order-totals
    v-card
      v-list
      v-list-item
        v-col(cols="6")
          div {{ $t('forms.orders.new.totals.withoutVat') }}
        v-col(cols="6")
          div.text-right(v-to-preferred-currency="totalWithoutVat")
      v-divider
      div(
        v-for="(v, k) in totalsByVat" :key="k"
      )
        v-list-item
          v-col(cols="6")
            div.left {{ $t('forms.orders.new.totals.vat')}} {{ k }}% {{ $t('forms.orders.new.totals.of') }}
            div.right(v-to-preferred-currency="v.total")
          v-col(cols="6")
            div.text-right(v-to-preferred-currency="v.vatTotal")
        v-divider
      v-list-item
        v-col(cols="6")
          div {{ $t('forms.orders.new.totals.total') }}
        v-col(cols="6")
          div.text-right(v-to-preferred-currency="total")
</template>

<script>
export default {
  name: 'FvOrderTotals',
  props: {
    orderLines: {
      type: Array,
      default() {
        return []
      }
    }
  },
  computed: {
    totalsByVat() {
      const res = this.orderLines.reduce((acc, orderLine) => {
        if (!acc[orderLine.vat]) {
          acc[orderLine.vat] = {}
          acc[orderLine.vat].total = 0
          acc[orderLine.vat].vatTotal = 0
        }
        acc[orderLine.vat].total += orderLine.price * orderLine.quantity
        acc[orderLine.vat].vatTotal +=
          (orderLine.price * orderLine.quantity * orderLine.vat) / 100
        return acc
      }, {})
      return res
    },
    totalWithoutVat() {
      let total = 0
      for (const property in this.totalsByVat) {
        total +=
          this.totalsByVat[property].total - this.totalsByVat[property].vatTotal
      }
      return total
    },
    total() {
      let total = 0
      for (const property in this.totalsByVat) {
        total += this.totalsByVat[property].total
      }
      return total
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  }
}
</script>
<style scoped>
.left {
  float: left;
  width: 50%;
  text-align: right;
  padding-right: 5px;
}
.right {
  float: right;
  width: 50%;
}
</style>
