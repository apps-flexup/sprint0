<template lang="pug">
.fv-price-field
  fv-number-field(
    data-testid="priceField"
    :value="price"
    :label="label"
    :outlined="outlined"
    :readonly="readonly"
    :clearable="clearable"
    :suffix="currency ? currency.symbole : null"
    @input="priceChanged"
    @click="onClick"
    @click:outside="onClickOutside"
  )
</template>

<script>
export default {
  name: 'FvPriceField',
  props: {
    value: {
      type: [String, Number],
      default() {
        return ''
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
    clearable: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      truncatePrice: true
    }
  },
  computed: {
    currency() {
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
    price() {
      let res = this.value
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
    priceChanged(v) {
      const payload = {
        price: parseFloat(v),
        currency: this.currency ? this.currency.iso3 : null
      }
      this.$emit('price:changed', payload)
    },
    onClick() {
      this.truncatePrice = false
    },
    onClickOutside() {
      this.truncatePrice = true
    }
  }
}
</script>
