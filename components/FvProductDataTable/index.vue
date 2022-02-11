<template lang="pug">
  .fv-product-data-table
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
      template(v-slot:item.categoryId="{ item }")
        div {{ displayCategory(item) }}
      template(v-slot:item.unit='{ item }')
        div {{ displayUnit(item) }}
      template(v-slot:item.status='{ item }')
        fv-product-status-select.mx-auto(
          v-if="canEdit"
          class="status-progress"
          :value="item.status"
          @status:changed="statusChanged(item, ...arguments)"
          @click.native.stop
        )
        fv-status-readonly(
          v-else
          :value="item.status"
        )
      template(v-slot:item.price='{ item }')
        fv-price-with-unit(
          :price="item.price"
          :currency="item.currency"
          :unit="item.unit"
        )
      template(v-slot:item.price_ttc='{ item }')
        fv-price-with-unit(
          :price="priceWithTax(item)"
          :currency="item.currency"
          :unit="item.unit"
        )
      template(v-slot:item.vat='{ item }')
        div {{ displayVat(item) }}
      template(v-slot:item.visibility='{ item }')
        div {{ displayVisibility(item) }}
      template(v-slot:item.actions="{ item }")
        v-row
          fv-edit-action(
            v-if="canEdit"
            @edit:clicked="editItem(item)"
          )
          fv-delete-action(
            v-if="canDelete"
            @delete:clicked="deleteItem(item)"
          )
</template>

<script>
import { applyVatToAmount } from '~/plugins/utils'

export default {
  name: 'FvProductDataTable',
  props: {
    hideDefaultFooter: {
      type: Boolean,
      default() {
        return false
      },
    },
    headers: {
      type: Array,
      default() {
        return []
      },
    },
    items: {
      type: Array,
      default() {
        return []
      },
    },
    options: {
      type: Object,
      default() {
        return null
      },
    },
  },
  computed: {
    canEdit() {
      return this.$rights.canEditProduct()
    },
    canDelete() {
      return this.$rights.canDeleteProduct()
    },
  },
  mounted() {
    this.$store.dispatch('categories/get')
  },
  methods: {
    priceWithTax(item) {
      const amount = item.price.amount
      const vat = item.vat
      return {
        amount: applyVatToAmount(amount, vat),
        currency: item.price.currency,
      }
    },
    displayName(item) {
      const res = this.$displayRules.name(item)
      return res
    },
    displayCategory(item) {
      const res = this.$displayRules.category(item)
      return res
    },
    displayVat(item) {
      const res = this.$displayRules.vat(item)
      return res
    },
    displayVisibility(item) {
      const res = this.$displayRules.visibility(item)
      return res
    },
    displayUnit(item) {
      const res = this.$displayRules.unit(item)
      return res
    },
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
    statusChanged(product, newStatus) {
      if (!product) return
      product.status = newStatus
      this.$store.dispatch('products/add', product)
    },
  },
}
</script>

<style lang="scss" scoped>
.status-progress {
  max-width: $status-btn-width;
}
</style>
