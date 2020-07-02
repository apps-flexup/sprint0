<template lang="pug">
  .fv-product-list
    v-row
      v-col(cols="12")
        v-data-table.elevation-2(
          :headers='headers'
          :items='items'
          item-key='id'
          @click:row='selected'
        )
          template(v-slot:item.actions='{ item }')
            v-icon.mr-2(small='' @click.stop='selected(item)')
              | mdi-pencil
            v-icon(small='' @click.stop='deleteItem(item)')
              | mdi-delete
</template>

<script>
export default {
  name: 'FvProductList',
  computed: {
    headers() {
      const res = this.$activeAccount.headersProducts()
      // const res = this.$store.getters['headers/products']
      // res.push({ text: 'headers.actions', value: 'actions', sortable: false })
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
      this.$emit('list:selected', product)
    },
    deleteItem(product) {
      console.log('delete :', product)
      this.$store.dispatch('products/remove', product)
      const offer = this.$store.getters['offers/getForProduct'](product.id)
      this.$store.dispatch('offers/remove', offer[0])
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-product-list {
  background-color: inherit;
}
</style>
