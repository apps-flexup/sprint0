<template lang="pug">
.fv-product-readonly
  fv-readonly-field(
    :label="label"
    :value="product"
  )
</template>

<script>
export default {
  name: 'FvProductReadonly',
  props: {
    value: {
      type: Number,
      default() {
        return null
      }
    },
    label: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    product() {
      const product = this.$store.getters['products/findById'](this.value)
      if (!product) return null
      const res = product.name
      return res
    }
  }
}
</script>
