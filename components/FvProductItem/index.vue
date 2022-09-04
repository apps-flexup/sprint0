<template lang="pug">
.fv-product-item
  v-list-item
    v-list-item-avatar
      v-img( :src="sourceImg" )
    v-list-item-title nom du produit
    v-list-item-subtitle  une petite description avec le prix peut-être
    v-list-item-content {{ $options.name }}
</template>

<script>
export default {
  name: 'FvProductItem',
  props: {
    item: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.fv-product-item {
  background-color: inherit;
}
</style>
