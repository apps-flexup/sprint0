<template lang="pug">
  .fv-category-autocomplete
    v-autocomplete(
      v-model="element"
      :items="filteredItems"
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
      search: null,
      filteredItems: []
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['categories/all']
      return res
    }
  },
  watch: {
    search(val) {
      // console.log('search :', val)
      val && val !== this.element && this.filterList(val)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('categories/get')
  },
  methods: {
    filterList() {
      // console.log('Filtrage', this.items)
      this.isLoading = true
      setTimeout(() => {
        this.filteredItems = this.items.filter((item) => {
          // console.log('cherche :', v, ', item :', item)
          const name = item.name || ''
          // return name.toLowerCase().includes((v || '').toLowerCase()) > -1
          return name
        })
        this.isLoading = false
      }, 500)
    },
    selected(v) {
      this.$emit('category:selected', v)
    }
  }
}
</script>
