<template lang="pug">
.fv-product-index
  v-row
    v-col(cols="12")
      fv-primary-button.text-right(
        v-if="canCreateProduct"
        data-testid="createButton"
        @button:click='createProduct'
      ) {{ $t('buttons.create.product') }}
  fv-product-list(
    data-testid="productList"
    @list:selected="selectedProduct"
    @list:edit="editProduct"
  )
  v-row
    v-col(cols="12")
      fv-text-button(
        data-testid="productsArchivedButton"
        @button:click="archivedProduct"
      )
        template(v-slot:icon)
          fv-icon(
            data-testid="archivedIcon"
            icon="mdi-archive-outline"
            color="#2A83C3"
            @icon:clicked="archivedProduct"
          )
        template(v-slot:text)
          | {{ $t('table.products.archivedButton') }}
</template>

<script>
export default {
  name: 'FvProductIndex',
  computed: {
    canCreateProduct() {
      return this.$rights.canCreateProduct()
    }
  },
  methods: {
    selectedProduct(product) {
      const action = 'read'
      product = JSON.parse(JSON.stringify(product))
      this.$router.push(`/products/${action}/${product.id}`)
    },
    editProduct(product) {
      const action = 'edit'
      product = JSON.parse(JSON.stringify(product))
      this.$router.push(`/products/${action}/${product.id}`)
    },
    createProduct() {
      this.$router.push('/products/new')
    },
    archivedProduct() {
      this.$router.push('/products/archived')
    }
  }
}
</script>
