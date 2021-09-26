<template lang="pug">
.fv-product-archived-data-table
  fv-generic-product-data-table(
    data-testid="FvGenericProductDataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:action="item")
      v-row
        fv-remove-from-archive-action(
          v-if="canRemoveArchiveProduct"
          @click.native.stop
          @archive:clicked="removeArchiveItem(item)"
        )
</template>

<script>
export default {
  name: 'FvProductArchivedDataTable',
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
    },
    options: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    canRemoveArchiveProduct() {
      return this.$rights.canRemoveArchiveProduct()
    }
  },
  methods: {
    selected(product) {
      this.$emit('dataTable:selected', product)
    },
    removeArchiveItem(product) {
      this.$store.dispatch('productsArchived/removeFromArchive', product)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    }
  }
}
</script>
