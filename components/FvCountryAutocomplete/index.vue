<template lang="pug">
  .fv-country-autocomplete
    fv-autocomplete(
      :items="items"
      :filter="filterList"
      @autocomplete:selected="selected"
    )
      template(v-slot:label)
        p {{ $t('forms.partners.new.country') }}
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
  computed: {
    items() {
      const res = this.$store.getters['countries/all']
      return res
    }
  },
  mounted() {
    this.$store.dispatch('countries/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filterList(item, v, it) {
      console.log(item)
      return filterCountryAutocomplete(item, v, it)
    },
    selected(v) {
      this.$emit('country:selected', v)
    }
  }
}
</script>
