<template lang="pug">
.fv-price-field-readonly
  fv-readonly-field(
    data-testid="priceField"
    class="right-input"
    :value="amount"
    :label="label"
    :suffix="preferredCurrency ? preferredCurrency.symbole : null"
  )
</template>

<script>
import { convert } from '~/plugins/currencies'

export default {
  name: 'FvPriceFieldReadonly',
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
    }
  },
  computed: {
    preferredCurrency() {
      const iso = this.$activeAccount.settings().currency
      const res = this.$store.getters['currencies/findIso'](iso)
      return res
    },
    nbDigitsAfterDecimalPoint() {
      const settings = this.$activeAccount.settings()
      if (!settings) return null
      const res = settings.price_nb_after_decimal_point
      return res
    },
    currency() {
      const res = this.value ? this.value.currency : null
      return res
    }
  },
  asyncComputed: {
    async amount() {
      const amount = this.value ? this.value.amount : null
      if (!amount) return null
      const fromCurrency = this.currency
      if (!fromCurrency) return null
      const toCurrency = this.preferredCurrency.iso3
      if (!toCurrency) return null
      let res = await convert(fromCurrency, toCurrency, amount)
      if (this.truncatePrice && this.nbDigitsAfterDecimalPoint) {
        const multiplier = 10 ** this.nbDigitsAfterDecimalPoint
        res = (Math.round(res * multiplier) / multiplier).toFixed(
          this.nbDigitsAfterDecimalPoint
        )
      }
      return res
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
    this.$store.dispatch('currencies/get')
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
