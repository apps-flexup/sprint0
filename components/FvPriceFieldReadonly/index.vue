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
    },
    search: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    suffix() {
      const unit = this.search?.unit
      let translatedUnit = ''
      if (unit) translatedUnit = this.$t('units.symbol.' + unit.unit)
      return `${this.preferredCurrency?.symbole}/${translatedUnit}`
    },
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
    }
  },
  asyncComputed: {
    async amount() {
      const amount = this.value ? this.value.amount : null
      if (!amount) return null
      const fromCurrency = this.value.currency
      if (!fromCurrency) return null
      const toCurrency = this.preferredCurrency.iso3
      if (!toCurrency) return null
      let res = await convert(fromCurrency, toCurrency, amount)
      if (this.nbDigitsAfterDecimalPoint) {
        const multiplier = 10 ** this.nbDigitsAfterDecimalPoint
        res = (Math.round(res * multiplier) / multiplier).toFixed(
          this.nbDigitsAfterDecimalPoint
        )
      }
      return res
    }
  },
  mounted() {
    this.$store.dispatch('currencies/get')
  }
}
</script>
