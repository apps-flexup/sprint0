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
  }
}
</script>
<style scoped>
.fv-contact-form {
  background-color: inherit;
}
</style>
