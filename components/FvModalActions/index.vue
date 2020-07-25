<template lang="pug">
  .fv-modal-actions
    v-row
      fv-close-modal-button(
        @button:close="close"
      )
      fv-save-modal-button(
        @button:save="save"
      )
</template>

<script>
export default {
  name: 'FvModalActions',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    close() {
      this.$emit('modal:actions:close')
    },
    save() {
      this.$emit('modal:actions:save')
    }
  }
}
</script>
