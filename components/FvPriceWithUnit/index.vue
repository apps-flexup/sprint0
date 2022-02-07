<template lang="pug">
.fv-price-with-unit
  div(data-testid="price") {{ priceWithUnit }}
</template>

<script>
export default {
  name: 'FvPriceWithUnit',
  inheritAttrs: true,
  props: {
    price: {
      type: Object,
      default() {
        return null
      },
    },
    unit: {
      type: Object,
      default() {
        return null
      },
    },
  },
  asyncComputed: {
    async priceWithUnit() {
      const amount = this.price ? this.price.amount : 0
      const currency = this.price ? this.price.currency : null
      const item = {
        price: amount,
        currency,
        unit: this.unit,
      }
      const res = await this.$displayRules.priceWithUnit(item)
      return res
    },
  },
}
</script>
