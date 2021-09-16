<template lang="pug">
.fv-product-archived-data-table
  fv-data-table(
    data-testid="fvDataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:item.name="{ item }")
      div {{ displayName(item) }}
    template(v-slot:item.category_id="{ item }")
      div {{ displayCategory(item) }}
    template(v-slot:item.unit='{ item }')
      div {{ displayUnit(item) }}
    template(v-slot:item.actions="{ item }")
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
  mounted() {
    this.$store.dispatch('categories/get')
  },
  methods: {
    displayName(item) {
      const res = this.$displayRules.name(item)
      return res
    },
    displayCategory(item) {
      const res = this.$displayRules.category(item)
      return res
    },
    displayUnit(item) {
      const res = this.$displayRules.unit(item)
      return res
    },
    selected(product) {
      this.$emit('dataTable:selected', product)
    },
    removeArchiveItem(product) {
      this.$store.dispatch('products/removeFromArchive', product)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    }
  }
}
</script>
