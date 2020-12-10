<template lang="pug">
  .page-product-new
    fv-product-form(
      url='offers'
      form='offers'
      action='new'
    )
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
