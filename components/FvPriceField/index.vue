<template lang="pug">
.fv-price-field
  fv-number-field(
    data-testid="priceField"
    :value="amount"
    :label="label"
    :outlined="outlined"
    :readonly="readonly"
    :suffix="suffix"
    @input="amountChanged"
    @click="onClick"
    @click:outside="onClickOutside"
  )
</template>

<script>
import priceMixin from '~/mixins/price'

export default {
  name: 'FvPriceField',
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
    outlined: {
      type: Boolean,
      default() {
        return true
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return false
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
      const res = await this.convertToPreferredCurrency(
        amount,
        fromCurrency,
        this.truncatePrice
      )
      return res
    }
  },
  methods: {
    amountChanged(v) {
      const payload = {
        amount: parseFloat(v),
        currency: this.preferredCurrency ? this.preferredCurrency.iso3 : null
      }
      this.$emit('price:changed', payload)
      this.emitGenericSignalForForm(payload)
    },
    onClick() {
      this.truncatePrice = false
    },
    onClickOutside() {
      this.truncatePrice = true
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
