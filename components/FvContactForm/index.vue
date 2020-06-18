<template lang="pug">
  .fv-contact-form
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvContactForm',
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
.fv-contact-form {
  background-color: inherit;
}
</style>
