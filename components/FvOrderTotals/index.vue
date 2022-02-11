<template lang="pug">
.fv-order-totals
  v-card
    v-list-item
      v-col(cols="8")
        div {{ $t('forms.orders.new.totals.withoutVat') }}
      v-col(cols="4")
        fv-price-to-preferred-currency.rightTotal(
          data-testid="totalWithoutVat"
          :price="totalWithoutTax"
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
          :price="totalWithTax"
          :currency="preferredCurrency"
        )

</template>

<script>
export default {
  name: 'FvOrderTotals',
  props: {
    totalWithoutTax: {
      type: Number,
      default() {
        return 0
      },
    },
    totalWithTax: {
      type: Number,
      default() {
        return 0
      },
    },
    totalsByVat: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    preferredCurrency() {
      const res = this.$activeAccount.settings().currency
      return res
    },
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    this.$store.dispatch('settings/getSettings')
  },
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
