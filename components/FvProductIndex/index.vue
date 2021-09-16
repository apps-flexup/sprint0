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
    :archivedProductPage="archivedProductPage"
    :tableName="tableName"
    :tableComponent="tableComponent"
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
            v-if="!archivedProductPage"
            icon="mdi-archive-outline"
            color="#2A83C3"
            @icon:clicked="archivedProduct"
          )
        template(v-slot:text v-if="!archivedProductPage")
          | {{ $t('table.products.archivedButton') }}
</template>

<script>
export default {
  name: 'FvProductIndex',
  props: {
    archivedProductPage: {
      type: Boolean,
      default() {
        return false
      }
    },
    tableName: {
      type: String,
      default() {
        return null
      }
    },
    tableComponent: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    canCreateProduct() {
      if (this.archivedProductPage) return false
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
