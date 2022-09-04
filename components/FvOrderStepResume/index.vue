<template lang="pug">
.fv-order-step-resume
  p {{ $options.name }}
</template>

<script>
export default {
  name: 'FvOrderStepResume',
  computed: {
    machin() {
      return 42
    }
  }
}
</script>
<style scoped>
.fv-offer-step-resume {
  background-color: inherit;
}
</style>
