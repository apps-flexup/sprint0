<template lang="pug">
  .fv-currency-autocomplete
    fv-auto-complete(
      v-model="this.currency"
      :items="items"
      :label="$t('forms.products.new.currency')"
      @autocomplete:selected="selected"
    )
</template>

<script>
export default {
  name: 'FvCurrencyAutocomplete',
  props: {
    currency: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$activeAccount.currencies()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('currencies/get')
  },
  methods: {
    selected(v) {
      // TODO convertir avec ISO3
      this.$emit('currency:selected', v)
    }
  }
}
</script>
