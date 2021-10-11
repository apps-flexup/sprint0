<template lang="pug">
.fv-product-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="value"
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.orders.new.product') }}
    template(v-slot:item="data")
      v-list-item-avatar
        v-img(:src="data.item.avatar")
      v-list-item-content
        div {{ data.item.name }}
    template(v-slot:selection="data")
      v-list-item-avatar
        v-img(:src="data.item.avatar")
      v-list-item-content
        div {{ data.item.name }}
    template(v-slot:no-data)
      div Aucune donnée disponible
</template>

<script>
import { filterProductAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvProductAutocomplete',
  props: {
    value: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const statusFilters = ['active']
      const res = this.$activeAccount.items('products', statusFilters)
      return res
    }
  },
  mounted() {
    this.$store.dispatch('products/get')
  },
  methods: {
    selected(v) {
      this.$emit('products:selected', v)
      this.emitGenericSignalForForm(v)
    },
    filter(item, v, it) {
      return filterProductAutocomplete(item, v, it)
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
