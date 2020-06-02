<template lang="pug">
  .fv-partner-new
    p {{ $options.name }}
</template>
<script>
export default {
  name: 'FvPartnerNew',
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
.fv-partner-new {
  background-color: inherit;
}
</style>
