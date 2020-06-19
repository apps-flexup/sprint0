<template lang="pug">
  .offers
    fv-offer-list
</template>

<script>
export default {
  computed: {
    machin() {
      return 42
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.offers {
  background-color: inherit;
}
</style>
