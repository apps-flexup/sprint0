<template lang="pug">
.fv-product-data-table
  fv-generic-product-data-table(
    data-testid="FvGenericProductDataTable"
    :headers='headers'
    :items='items'
    :hide-default-footer="hideDefaultFooter"
    :options="options"
    @dataTable:sortBy="sortBy"
    @dataTable:selected="selected"
  )
    template(v-slot:status="item")
      fv-status-switch(
        v-if="canEditProduct"
        :value="item.status"
        dense
        denseLabel
        @click.native.stop
        @status:changed="statusChanged(item, ...arguments)"
      )
      fv-status-switch-readonly(
        v-else
        :value="item.status"
        dense
        denseLabel
        @click.native.stop
      )
    template(v-slot:action="item")
      v-row
        fv-edit-action(
          v-if="canEditProduct"
          @click.native.stop
          @edit:clicked="editItem(item)"
        )
        fv-delete-action(
          v-if="canDeleteProduct"
          @delete:clicked="deleteItem(item)"
        )
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
    },
    options: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    canEditProduct() {
      return this.$rights.canEditProduct()
    },
    canDeleteProduct() {
      return this.$rights.canDeleteProduct()
    }
  },
  methods: {
    selected(product) {
      this.$emit('dataTable:selected', product)
    },
    editItem(product) {
      this.$emit('dataTable:edit', product)
    },
    deleteItem(product) {
      this.$store.dispatch('products/remove', product)
    },
    sortBy(v) {
      this.$emit('dataTable:sortBy', v)
    },
    statusChanged(product, status) {
      if (!product) return
      status = product.status === 'active' ? 'inactive' : 'active'
      product.status = status
      this.$store.dispatch('products/add', product)
    }
  }
}
</script>
