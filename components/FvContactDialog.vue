<template lang="pug">
  v-dialog.fv-contact-dialog(
    v-model="show"
    max-width="50%"
  )
    p {{ $options.name }}
    h1 Hello les gars
    pre plop plop plop
</template>

<script>
export default {
  name: 'FvContactDialog',
  props: {
    show: {
      type: Boolean
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  }
}
</script>
<style scoped>
.fv-contact-dialog {
  background-color: inherit;
}
</style>
