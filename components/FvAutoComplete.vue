<template lang="pug">
  .fv-auto-complete
    v-autocomplete(
      v-model="element"
      :items="filteredItems"
      :loading="isLoading"
      :search-input.sync="search"
      item-text="name"
      item-value="id"
      clearable=''
      outlined=''
      @click:row="selected"
    )
</template>

<script>
export default {
  name: 'FvAutoComplete',
  inheritAttrs: true,
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      element: null,
      isLoading: false,
      search: null,
      filteredItems: []
    }
  },
  computed: {
    aitems() {
      const res = []
      return res
    }
  },
  watch: {
    search(val) {
      console.log('search :', val)
      val && val !== this.element && this.filterList(val)
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filterList(v) {
      console.log('Filtrage', this.items)
      this.isLoading = true
      setTimeout(() => {
        this.filteredItems = this.items.filter((item) => {
          console.log('cherche :', v, ', item :', item)
          const name = item.name || ''
          // return name.toLowerCase().includes((v || '').toLowerCase()) > -1
          return name
        })
        this.isLoading = false
      }, 500)
    },
    selected(v) {
      // any,
      // { select: (value: boolean) => void,
      // isSelected: boolean,
      // expand: (value: boolean) => void,
      // isExpanded: boolean }
      console.log('Élément sélectionné', v)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-auto-complete {
  background-color: inherit;
}
</style>
