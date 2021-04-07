<template lang="pug">
.fv-close-modal-button
  v-btn(
    data-testid="button"
    color='blue darken-1'
    text=''
    @click.stop='close'
  ) {{ $t('modal.close') }}
</template>

<script>
export default {
  name: 'FvCloseModalButton',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    close() {
      this.$emit('button:close')
    }
  }
}
</script>
