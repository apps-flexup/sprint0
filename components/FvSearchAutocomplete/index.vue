<template lang="pug">
.fv-search-autocomplete
  div(class='searchBar')
    v-select(:items='item')
    fv-autocomplete(
      :element="category_id"
      :items="items"
      :filter="filterList"
      :multiple='true'
      auto-select-first
      @autocomplete:selected="selected"
    )
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
  name: 'FvSearchAutocomplete',
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
      isLoading: false,
      item: ['categorie', 'test', 'test2']
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
    }
  }
}
</script>

<style scoped>
.searchBar {
  display: flex;
}
</style>
