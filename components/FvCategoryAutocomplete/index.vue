<template lang="pug">
  .fv-category-autocomplete
    v-autocomplete(
      v-model="categoryId"
      :items="items"
      :filter="filterList"
      :loading="isLoading"
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
    },
    categoryId: {
      get() {
        return this.element
      },
      set(v) {
        this.$emit('category:selected', v)
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    filterList(item, v, _it) {
      const name = JSON.parse(JSON.stringify(item.name || {}))
      // const nameValues = Object.prototype.flatI18n.call()
      const nameValues = Object.keys(name)
        .map((k) => {
          return item.name[k]
        })
        .join(' ')
        .toLowerCase()
      const res = String.prototype.filtreAutocomplete.call(nameValues, v)
      return res
    },
    selected(v) {
      this.$emit('category:selected', v)
    }
  }
}
</script>
