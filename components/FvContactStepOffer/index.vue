<template lang="pug">
.fv-contact-step-offer
</template>
<script>
export default {
  name: 'FvContactStepOffer',
  computed: {
    machin() {
      return 42
    },
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
}
</script>
<style scoped>
.fv-contact-step-offer {
  background-color: inherit;
}
</style>
