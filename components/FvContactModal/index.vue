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
  }
}
</script>
<style scoped>
.fv-contact-modal {
  background-color: inherit;
}
</style>
