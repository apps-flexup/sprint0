<template lang="pug">
.fv-remove-from-archive-action
  fv-icon.mr-2(
    data-testid="archiveIcon"
    icon="mdi-archive-arrow-up-outline"
    color="#2A83C3"
    @icon:clicked="clicked"
  )
</template>

<script>
export default {
  name: 'FvRemoveFromArchiveAction',
  methods: {
    clicked() {
      this.$emit('archive:clicked')
    }
  }
}
</script>
