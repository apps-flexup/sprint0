<template lang="pug">
  .page-product-new
    fv-product-form(
      action='new'
    )
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
    console.log('la route', this.$route)
  }
}
</script>
