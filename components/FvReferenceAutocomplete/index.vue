<template lang="pug">
.fv-reference-autocomplete
  fv-autocomplete(
    data-testid="autocomplete"
    :element="element"
    :items="items"
    :filter="filter"
    :returnObject="true"
    itemValue="key"
    @autocomplete:selected="referenceSelected"
  )
    template(v-slot:label)
      p {{ $t('forms.paymentConditions.new.references.' + key) }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title {{ $t('references.' + key + '.' + data.item.key) }}
    template(v-slot:selection="data")
      div {{ $t('references.' + key + '.' + data.item.key) }}
</template>

<script>
import { filterReferenceAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvReferenceAutocomplete',
  props: {
    reference: {
      type: Object,
      default() {
        return {}
      }
    },
    element: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    key() {
      const res = this.reference ? this.reference.key : null
      return res
    },
    items() {
      const res = this.reference ? this.reference.value : null
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    referenceSelected(v) {
      this.$emit('reference:selected', v)
    },
    filter(item, v, it) {
      return filterReferenceAutocomplete(item, v, it)
    }
  }
}
</script>
