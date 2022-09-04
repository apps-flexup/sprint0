<template lang="pug">
.fv-contact-step-product
  p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvContactStepProduct',
  computed: {
    machin() {
      return 42
    }
  }
}
</script>
<style scoped>
.fv-contact-step-product {
  background-color: inherit;
}
</style>
