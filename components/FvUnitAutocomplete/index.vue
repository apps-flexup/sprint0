<template lang="pug">
  .fv-unit-autocomplete
    v-autocomplete(
      v-model="element"
      :items="filteredItems"
      :loading="isLoading"
      :search-input.sync="search"
      :label="$t('forms.products.new.unit')"
      item-text="name"
      item-value="id"
      clearable=''
      outlined=''
      @change="selected"
    )
      template(v-slot:item="data")
        v-list-item-content
          v-list-item-title {{ `${data.item.symbole} (${data.item.dimension})` }}
      template(v-slot:selection="data")
        div {{ `${data.item.symbole} (${data.item.dimension})` }}
</template>

<script>
export default {
  name: 'FvUnitAutocomplete',
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
      const res = this.$store.getters['units/all']
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
    // this.$store.dispatch('units/get')
  },
  methods: {
    filterList() {
      this.isLoading = true
      setTimeout(() => {
        this.filteredItems = this.items.filter((item) => {
          // console.log('cherche :', v, ', item :', item)
          const name = item.symbole || ''
          // return name.toLowerCase().includes((v || '').toLowerCase()) > -1
          return name
        })
        this.isLoading = false
      }, 500)
    },
    selected(v) {
      this.$emit('unit:selected', v)
    }
  }
}
</script>
