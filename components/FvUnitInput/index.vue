<template lang="pug">
.fv-unit-input
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvUnitInput',
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
.fv-unit-input {
  background-color: inherit;
}
</style>
