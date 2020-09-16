<template lang="pug">
.fv-order-totals
  v-card
    v-list
    v-list-item
      v-col(cols="6")
        div {{ $t('forms.orders.new.totals.withoutVat') }}
      v-col(cols="6")
        div.text-right(v-to-preferred-currency="{ amount: totalWithoutVat, currency: preferredCurrency }")
    v-divider
    div(
      v-for="(v, k) in totalsByVat" :key="k"
    )
      v-list-item
        v-col(cols="6")
          div.left {{ $t('forms.orders.new.totals.vat')}} {{ k }}% {{ $t('forms.orders.new.totals.of') }}
          div.right(v-to-preferred-currency="{amount: v.total, currency: preferredCurrency }")
        v-col(cols="6")
          div.text-right(v-to-preferred-currency="{ amount: v.vatTotal, currency: preferredCurrency }")
      v-divider
    v-list-item
      v-col(cols="6")
        div {{ $t('forms.orders.new.totals.total') }}
      v-col(cols="6")
        div.text-right(v-to-preferred-currency="{ amount: total, currency: preferredCurrency }")
</template>

<script>
import { convert } from '~/plugins/currencies'

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
  asyncComputed: {
    async totalsByVat() {
      const res = await this.orderLines.reduce(async (acc, orderLine) => {
        const accumulator = await acc
        if (!accumulator[orderLine.vat]) {
          accumulator[orderLine.vat] = {}
          accumulator[orderLine.vat].total = 0
          accumulator[orderLine.vat].vatTotal = 0
        }
        const total = orderLine.price * orderLine.quantity
        const amount = await convert(
          orderLine.currency,
          this.preferredCurrency,
          total
        )
        accumulator[orderLine.vat].total += amount
        accumulator[orderLine.vat].vatTotal += (amount * orderLine.vat) / 100
        return Promise.resolve(accumulator)
      }, Promise.resolve({}))
      return res
    },
    preferredCurrency() {
      const res = this.$store.getters['accounts/preferredCurrency']
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
