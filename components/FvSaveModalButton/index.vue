<template lang="pug">
.fv-save-modal-button
  v-btn(
    color='blue darken-1'
    text=''
    @click.stop='close'
  ) {{ $t('modal.save') }}
</template>

<script>
export default {
  name: 'FvSaveModalButton',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    close() {
      this.$emit('button:save')
    }
  }
}
</script>
