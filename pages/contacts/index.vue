<template lang="pug">
  .contacts-index
    fv-contact-list
</template>

<script>
export default {
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.contacts-index {
  background-color: inherit;
}
</style>
