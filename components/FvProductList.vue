<template lang="pug">
  .fv-product-list
    //- fv-product-list-search(
    //-   :products="items"
    //- )
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          :headers='headers'
          :items='items'
          item-key='id'
        )
</template>

<script>
export default {
  name: 'FvProductList',
  computed: {
    headers() {
      let res = this.$store.getters['headers/products']
      res = res.map((element) => {
        const translated = this.$i18n.t(element.text)
        return {
          text: translated,
          align: element.align,
          sortable: element.sortable,
          value: element.value
        }
      })
      return res
    },
    items() {
      const res = this.$store.getters['products/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('products/get')
    this.$store.dispatch('headers/getProductHeaders')
  }
}
</script>
<style lang="scss" scoped>
.fv-product-list {
  background-color: inherit;
}
</style>
