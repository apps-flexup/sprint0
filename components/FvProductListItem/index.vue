<template lang="pug">
.fv-product-list-item
  v-list-item-avatar(v-if="product.avatar")
    v-img(:src="product.avatar")
  v-list-item-content
    .d-inline-flex.justify-space-between
      span {{ product.name }}
      div.d-flex
        fv-price-to-preferred-currency(
          :price="product.price.amount"
          :currency="product.price.currency"
        )
        span.ml-1 / {{ product.unit.unit }}
</template>

<script>
export default {
  name: 'FvProductListItem',
  props: {
    product: {
      type: Object,
      default() {
        return undefined
      },
    },
  },
}
</script>

<style scoped>
.fv-product-list-item {
  width: 100%;
}
</style>
