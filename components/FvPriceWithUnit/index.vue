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
    },
    unit: {
      type: Object,
      default() {
        return null
      }
    }
  },
  asyncComputed: {
    async priceWithUnit() {
      const item = {
        price: this.price,
        currency: this.currency,
        unit: this.unit
      }
      const res = await this.$displayRules.priceWithUnit(item)
      return res
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  }
}
</script>
