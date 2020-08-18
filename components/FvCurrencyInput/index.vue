<template lang="pug">
.fv-currency-input
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvCurrencyInput',
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
<style scoped>
.fv-currency-input {
  background-color: inherit;
}
</style>
