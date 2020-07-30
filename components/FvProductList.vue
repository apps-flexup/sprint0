<template lang="pug">
  .fv-product-list
    v-card
      v-card-title
        | {{ $t('table.products.title') }}
        v-spacer
        fv-data-table-search-bar(
          :label="$t('table.products.search')"
          @dataTableSearchBar:changed="searchChanged"
        )
      v-data-table.elevation-2(
        :headers='headers'
        :items='items'
        item-key='id'
        @click:row='selected'
        :search="search"
        :custom-filter="filterFunction"
      )
        template(v-slot:item.category="{ item }")
          div(v-to-category="item.category_id")
        template(v-slot:item.status='{ item }')
          fv-status-progress-atom(:status="item.status")
        template(v-slot:item.actions="{ item }")
          v-row
            fv-edit-action(@edit:clicked="selected(item)")
            fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
import { filterProductsDataTable } from '~/plugins/utils'

export default {
  name: 'FvProductList',
  data() {
    return {
      search: ''
    }
  },
  computed: {
    headers() {
      const res = this.$activeAccount.headersProducts()
      return this.$translateHeaders(res)
    },
    items() {
      const res = this.$activeAccount.products()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('headers/getProductHeaders')
  },
  methods: {
    selected(product) {
      console.log('selected: ', product)
      this.$emit('list:selected', product)
    },
    deleteItem(product) {
      this.$store.dispatch('products/remove', product)
    },
    searchChanged(v) {
      this.search = v
    },
    filterFunction(item, queryText, itemText) {
      return filterProductsDataTable(item, queryText, itemText)
    }
  }
}
</script>
