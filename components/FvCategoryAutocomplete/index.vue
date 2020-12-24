<template lang="pug">
.fv-category-autocomplete
  fv-autocomplete(
    :element="category_id"
    :items="items"
    :filter="filterList"
    @autocomplete:selected="selected"
  )
    template(v-slot:label)
      div {{ $t('forms.products.new.category') }}
    template(v-slot:item="data")
      v-list-item-content
        v-list-item-title(v-to-locale="data.item.name")
    template(v-slot:selection="data")
      v-list-item-content
        v-list-item-title(v-to-locale="data.item.name")
</template>

<script>
import { filterCategoryAutocomplete } from '~/plugins/utils'

export default {
  name: 'FvCategoryAutocomplete',
  inheritAttrs: true,
  props: {
    category_id: {
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
    this.$store.dispatch('categories/get')
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filterList(item, v, it) {
      return filterCategoryAutocomplete(item, v, it)
    },
    selected(v) {
      this.$emit('category:selected', v)
      console.log('la categorie fdpppp', v)
    }
  }
}
</script>
