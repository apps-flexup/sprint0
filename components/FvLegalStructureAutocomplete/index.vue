<template lang="pug">
.fv-legal-structure-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="legalStructureId"
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      p {{ label }}
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
  inheritAttrs: true,
  props: {
    value: {
      type: Number,
      default() {
        return null
      }
    },
    label: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['contracts/legalStructures']
      return res
    },
    legalStructureId() {
      const res = this.value
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
