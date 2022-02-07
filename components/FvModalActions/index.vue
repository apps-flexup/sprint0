<template lang="pug">
.fv-modal-actions
  v-row
    fv-modal-button(
      data-testid="closeButton"
      @button:click="close"
    ) {{ $t('modal.close') }}
    fv-modal-button(
      data-testid="saveButton"
      @button:click="save"
    ) {{ $t('modal.save') }}
</template>

<script>
export default {
  name: 'FvModalActions',
  methods: {
    close() {
      this.$emit('modal:actions:close')
    },
    save() {
      this.$emit('modal:actions:save')
    },
  },
}
</script>
