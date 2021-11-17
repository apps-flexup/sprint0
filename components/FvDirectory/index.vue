<template lang="pug">
.fv-directory
  fv-autocomplete(
    data-testid="autocomplete"
    :element="selected"
    :items="directory"
    :returnObject="true"
    :filter="filter"
    @autocomplete:selected="entitySelected"
  )
    template(v-slot:label)
      div {{ label }}
    template(v-slot:item="data")
      v-list-item-content
        div {{ $displayRules.directoryInput(data.item) }}
    template(v-slot:selection="data")
      v-list-item-content
        div {{ $displayRules.directoryInput(data.item) }}
</template>

<script>
import { filterDirectoryAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvDirectory',
  inheritAttrs: true,
  props: {
    selected: {
      type: Object,
      default() {
        return null
      }
    },
    directory: {
      type: Array,
      default() {
        return []
      }
    },
    label: {
      type: String,
      default() {
        return this.$t('autocomplete.user.label')
      }
    }
  },
  computed: {
    items() {
      const res = []
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filter(item, v, it) {
      const toFilter = this.$displayRules.directoryInput(item)
      return filterDirectoryAutocomplete(toFilter, v, it)
    },
    entitySelected(v) {
      this.$emit('entity:selected', v)
    }
  }
}
</script>
