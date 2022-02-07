<template lang="pug">
.fv-price-field-readonly
  fv-readonly-field(
    data-testid="priceField"
    class="right-input"
    :value="amount"
    :label="label"
    :suffix="suffix"
  )
</template>

<script>
import priceMixin from '~/mixins/price'

export default {
  name: 'FvPriceFieldReadonly',
  mixins: [priceMixin],
  props: {
    value: {
      type: Object,
      default() {
        return null
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    },
    search: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      truncatePrice: true
    }
  },
  asyncComputed: {
    async amount() {
      const amount = this.value?.amount
      const fromCurrency = this.value?.currency
      return await this.convertToPreferredCurrency(
        amount,
        fromCurrency,
        this.truncatePrice
      )
    }
  }
}
</script>
