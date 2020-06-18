<template lang="pug">
  .fv-contact-modal
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvContactModal',
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
.fv-contact-modal {
  background-color: inherit;
}
</style>
