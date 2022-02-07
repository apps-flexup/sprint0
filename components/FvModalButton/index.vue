<template lang="pug">
.fv-modal-button
  fv-text-button(
    data-testid='modal-button'
    @button:click="click"
  )
    template(v-slot:text)
      slot
</template>

<script>
export default {
  name: 'FvModalButton',
  methods: {
    click() {
      this.$emit('button:click')
    },
  },
}
</script>
