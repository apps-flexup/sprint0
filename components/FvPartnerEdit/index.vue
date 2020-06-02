<template lang="pug">
  .fv-partner-edit
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvPartnerEdit',
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
.fv-partner-edit {
  background-color: inherit;
}
</style>
