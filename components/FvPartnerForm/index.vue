<template lang="pug">
  .fv-partner-form
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvPartnerForm',
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
.fv-partner-form {
  background-color: inherit;
}
</style>
