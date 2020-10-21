<template lang="pug">
.fv-language-autocomplete
  fv-autocomplete(
    :element="language"
    :items="items"
    :filter="filter"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('languages.language') }}
    template(v-slot:item='{ item }')
      div {{ $t('languages.' + item)}}
    template(v-slot:selection='{ item }')
      div {{ $t('languages.' + item)}}
</template>

<script>
import { filterLanguageAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvLanguageAutocomplete',
  inheritAttrs: true,
  props: {
    language: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$store.getters.locales
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      if (v) this.$emit('language:selected', v)
    },
    filter(item, v, it) {
      const language = {
        iso2: item,
        name: this.$t('languages.' + item)
      }
      return filterLanguageAutocomplete(language, v, it)
    }
  }
}
</script>
