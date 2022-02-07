<template lang="pug">
.fv-country-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="value"
    :items="items"
    :filter="filterList"
    :itemValue="itemValue"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      p {{ label }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ data.item.name }}
    template(v-slot:selection="data")
      div {{ data.item.name }}
</template>

<script>
import { filterCountryAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvCountryAutocomplete',
  inheritAttrs: true,
  props: {
    value: {
      type: String,
      default() {
        return null
      },
    },
    itemValue: {
      type: String,
      default() {
        return 'iso3'
      },
    },
    label: {
      type: String,
      default() {
        return null
      },
    },
  },
  computed: {
    items() {
      const res = this.$store.getters['countries/all']
      return res
    },
  },
  mounted() {
    this.$store.dispatch('countries/get')
  },
  methods: {
    filterList(item, v, it) {
      return filterCountryAutocomplete(item, v, it)
    },
    selected(v) {
      this.$emit('country:selected', v)
      this.emitGenericSignalForForm(v)
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    },
  },
}
</script>
