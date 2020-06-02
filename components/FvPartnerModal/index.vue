<template lang="pug">
  .fv-partner-modal
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvPartnerModal',
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
.fv-partner-modal {
  background-color: inherit;
}
</style>
