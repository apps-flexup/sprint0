<template lang="pug">
.fv-order-step-select-offers
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvOrderStepSelectOffers',
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
