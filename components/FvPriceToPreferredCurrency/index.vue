<template lang="pug">
.fv-price-to-preferred-currency
  div(data-testid="price") {{ convertedPrice }}
</template>

<script>
export default {
  name: 'FvPriceToPreferredCurrency',
  inheritAttrs: true,
  props: {
    price: {
      type: [Number, String],
      default() {
        return null
      }
    },
    currency: {
      type: String,
      default() {
        return null
      }
    }
  },
  asyncComputed: {
    async convertedPrice() {
      const item = {
        price: this.price,
        currency: this.currency
      }
      const res = await this.$displayRules.priceToPreferredCurrency(item)
      return res
    }
  }
}
</script>
