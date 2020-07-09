<template lang="pug">
  .fv-category-autocomplete
    fv-autocomplete(
      :items="items"
      :filter="filterList"
      @autocomplete:selected="selected"
    )
      template(v-slot:label)
        p {{ $t('forms.products.new.category') }}
      template(v-slot:item="data")
        v-list-item-content
          v-list-item-title(v-to-locale="data.item.name")
      template(v-slot:selection="data")
        div(v-to-locale="data.item.name")
</template>

<script>
import { filterCategoryAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvCategoryAutocomplete',
  inheritAttrs: true,
  props: {
    element: {
      type: Number,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['categories/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filterList(item, v, it) {
      return filterCategoryAutocomplete(item, v, it)
    },
    selected(v) {
      this.$emit('category:selected', v)
    }
  }
}
</script>
