<template lang="pug">
  .fv-category-autocomplete
    v-autocomplete(
      v-model="element"
      :items="filteredItems"
      :filter="filterList"
      :loading="isLoading"
      :search-input.sync="search"
      :label="$t('forms.products.new.category')"
      item-value="id"
      clearable=''
      outlined=''
      @change="selected"
    )
      template(v-slot:item="data")
        v-list-item-content
          v-list-item-title(v-to-locale="data.item.name")
      template(v-slot:selection="data")
        div(v-to-locale="data.item.name")
</template>

<script>
export default {
  name: 'FvCategoryAutocomplete',
  inheritAttrs: true,
  data() {
    return {
      element: null,
      isLoading: false,
      search: null
    }
  },
  computed: {
    filteredItems() {
      const res = this.$store.getters['categories/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    // this.$store.dispatch('categories/get')
  },
  methods: {
    filterList(item, v, _it) {
      const name = JSON.parse(JSON.stringify(item.name || {}))
      const nameValues = Object.keys(name)
        .map((k) => {
          return item.name[k]
        })
        .join(' ')
        .toLowerCase()
      const res =
        (nameValues || '').toLowerCase().includes((v || '').toLowerCase()) > -1
      return res
    },
    selected(v) {
      this.$emit('category:selected', v)
    }
  }
}
</script>
