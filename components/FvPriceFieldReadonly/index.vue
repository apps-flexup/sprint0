<template lang="pug">
.fv-price-field-readonly
  fv-readonly-field(
    data-testid="priceField"
    class="right-input"
    :value="value.amount"
    :label="label"
    :suffix="currencySymbol ? currencySymbol.symbole : null"
  )
</template>

<script>
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
    currencySymbol() {
      const res = this.$store.getters['currencies/findIso'](this.value.currency)
      return res
    }
  },
  mounted() {
    this.$store.dispatch('currencies/get')
  }
}
</script>
