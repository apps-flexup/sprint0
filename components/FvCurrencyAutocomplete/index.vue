<template lang="pug">
.fv-currency-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="currencyId"
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      p {{ $t('forms.products.new.currency') }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ `${data.item.name} ${data.item.symbole} (${data.item.iso3})` }}
    template(v-slot:selection="data")
      div {{ `${data.item.name} ${data.item.symbole} (${data.item.iso3})` }}
</template>

<script>
import { filterCurrencyAutocomplete } from '~/plugins/utils'
export default {
  name: 'FvCurrencyAutocomplete',
  props: {
    currency: {
      type: String,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['currencies/all']
      return res
    },
    currencyId() {
      const currency = this.$store.getters['currencies/findIso'](this.currency)
      return currency ? currency.id : null
    },
  },
  mounted() {
    this.$store.dispatch('currencies/get')
  },
  methods: {
    selected(v) {
      let res = this.$store.getters['currencies/find'](v)
      if (res) res = res.iso3
      this.$emit('currency:selected', res)
    },
    filter(item, v, it) {
      return filterCurrencyAutocomplete(item, v, it)
    },
  },
}
</script>
