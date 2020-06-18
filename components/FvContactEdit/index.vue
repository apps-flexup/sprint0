<template lang="pug">
  .fv-contact-edit
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvContactEdit',
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
.fv-contact-edit {
  background-color: inherit;
}
</style>
