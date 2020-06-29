<template lang="pug">
  .contract-index
    pre {{ params }}
    fv-contract-list(:contracts='contracts')
</template>

<script>
export default {
  computed: {
    contracts() {
      const res = []
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.contract-index {
  background-color: inherit;
}
</style>
