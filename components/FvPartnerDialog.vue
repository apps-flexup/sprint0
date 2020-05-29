<template lang="pug">
  v-dialog.fv-partner-dialog(
    v-model="show"
    max-width="50%"
  )
    p {{ $options.name }}
    h1 Hello les gars
    pre plop plop plop
</template>

<script>
export default {
  name: 'FvPartnerDialog',
  props: {
    show: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style lang="scss" scoped>
.fv-partner-dialog {
  background-color: inherit;
}
</style>
