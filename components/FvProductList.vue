<template lang="pug">
  .fv-product-list
    v-card
      v-card-title
        | {{ $t('table.products.title') }}
        v-spacer
        v-text-field(
          v-model="search"
          :label="$t('table.products.search')"
          append-outer-icon="mdi-magnify"
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
          v-icon.mr-2(small='' @click.stop="selected(item)")
            | mdi-pencil
          v-icon(small='' @click.stop="deleteItem(item)")
            | mdi-delete
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
    filterFunction(item, queryText, itemText) {
      return filterProductsDataTable(item, queryText, itemText)
    }
  }
}
</script>
