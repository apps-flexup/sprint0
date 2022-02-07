<template lang="pug">
.fv-theme-autocomplete
  fv-autocomplete(
    data-testid='autocomplete'
    :element="theme"
    :items="items"
    :filter="filter"
    :label="$t('themes.theme')"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('themes.theme') }}
    template(v-slot:item='{ item }')
      div {{ $t('themes.' + item)}}
    template(v-slot:selection='{ item }')
      div {{ $t('themes.' + item)}}
</template>

<script>
import { filterThemeAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvThemeAutocomplete',
  inheritAttrs: true,
  props: {
    theme: {
      type: String,
      default() {
        return null
      },
    },
  },
  computed: {
    items() {
      const res = ['light', 'dark']
      return res
    },
  },
  methods: {
    selected(v) {
      if (v) this.$emit('theme:selected', v)
    },
    filter(item, v, it) {
      item = this.$t('themes.' + item)
      return filterThemeAutocomplete(item, v, it)
    },
  },
}
</script>
