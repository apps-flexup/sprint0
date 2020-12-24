<template lang="pug">
.fv-price-to-preferred-currency
  div(
    v-to-preferred-currency="{amount: price, currency: currency}"
    :key="preferredCurrency"
  )
</template>

<script>
export default {
  name: 'FvAutocomplete',
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
  computed: {
    preferredCurrency() {
      const res = this.$activeAccount.settings().currency
      return res
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
    this.$store.dispatch('settings/getSettings')
  }
}
</script>
