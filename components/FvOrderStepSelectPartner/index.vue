<template lang="pug">
.fv-order-step-select-partner
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvOrderStepSelectPartner',
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
