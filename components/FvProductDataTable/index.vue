<template lang="pug">
.fv-product-data-table
  v-data-table(
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    @click:row='selected'
    @update:sort-by="sortBy"
    @update:sort-desc="sortDesc"
  )
    template(v-slot:item.name="{ item }")
      div(v-to-locale="item.name")
    template(v-slot:item.category="{ item }")
      div(v-to-category="item.category_id")
    template(v-slot:item.unit='{ item }')
      div(v-to-unit="item")
    template(v-slot:item.status='{ item }')
      fv-status-progress(:status="item.status")
    template(v-slot:item.actions="{ item }")
      v-row
        fv-edit-action(@edit:clicked="selected(item)")
        fv-delete-action(@delete:clicked="deleteItem(item)")
</template>

<script>
export default {
  name: 'FvProductDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      }
    },
    headers: {
      type: Array,
      default() {
        return []
      }
    },
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(product) {
      console.log('selected: ', product)
      this.$emit('dataTable:selected', product)
    },
    deleteItem(product) {
      this.$store.dispatch('products/remove', product)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
    sortDesc(v) {
      this.$emit('dataTable:sortDesc', v)
    }
  }
}
</script>
