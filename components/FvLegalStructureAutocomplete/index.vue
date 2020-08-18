<template lang="pug">
.fv-legal-structure-autocomplete
  fv-autocomplete(
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      p {{ $t('forms.partners.new.legalStructure') }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ `${data.item.name} (${data.item.sigle})` }}
    template(v-slot:selection="data")
      div {{ `${data.item.name} (${data.item.sigle})` }}
</template>

<script>
import { filterLegalStructureAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvLegalStructureAutocomplete',
  computed: {
    items() {
      const res = this.$store.getters['contracts/legalStructures']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('contracts/getLegalStructures')
  },
  methods: {
    selected(v) {
      this.$emit('legalstructure:selected', v)
    },
    filter(item, v, it) {
      return filterLegalStructureAutocomplete(item, v, it)
    }
  }
}
</script>
