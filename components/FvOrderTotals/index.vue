<template lang="pug">
.fv-order-totals
  v-card
    v-list-item
      v-col(cols="8")
        div {{ $t('forms.orders.new.totals.withoutVat') }}
      v-col(cols="4")
        fv-price-to-preferred-currency.rightTotal(
          data-testid="totalWithoutVat"
          :price="totalWithoutVat"
          :currency="preferredCurrency"
        )
    v-divider
    div(
      v-for="(v, k) in totalsByVat" :key="k"
    )
      v-list-item
        v-col(cols="8")
          div.left {{ $t('forms.orders.new.totals.vat')}} {{ k }}% {{ $t('forms.orders.new.totals.of') }}
          fv-price-to-preferred-currency.right(
            data-testid="totalByVat"
            :price="v.total"
            :currency="preferredCurrency"
          )
        v-col(cols="4")
          fv-price-to-preferred-currency.rightTotal(
            :price="v.vatTotal"
            :currency="preferredCurrency"
          )
      v-divider
    v-list-item
      v-col(cols="8")
        div {{ $t('forms.orders.new.totals.total') }}
      v-col(cols="4")
        fv-price-to-preferred-currency.rightTotal(
          data-testid="total"
          :price="total"
          :currency="preferredCurrency"
        )

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
    }
  },
  computed: {
    preferredCurrency() {
      const res = this.$activeAccount.settings().currency
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
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('settings/getSettings')
  }
}
</script>
<style scoped>
.left {
  text-align: right;
  padding-right: 5px;
}
.right {
  float: right;
  width: 50%;
}
.col {
  display: flex !important;
}
.rightTotal {
  margin-right: 0px;
  margin-left: auto;
}
</style>
