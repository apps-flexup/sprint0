<template lang="pug">
  .fv-country-list
    p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvCountryList',
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
.fv-country-list {
  background-color: inherit;
}
</style>
