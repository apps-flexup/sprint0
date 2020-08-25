<template lang="pug">
.fv-forme-juridique
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvFormeJuridiqueInput',
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
.fv-forme-juridique-input {
  background-color: inherit;
}
</style>
