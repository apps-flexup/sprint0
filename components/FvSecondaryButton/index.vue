<template lang="pug">
.fv-secondary-button
  v-btn(
    data-testid="button"
    x-large
    color="#FCB71C"
    outlined
    @click.prevent="click"
  )
    slot
</template>

<script>
export default {
  name: 'FvSecondaryButton',
  methods: {
    click() {
      this.$emit('button:click')
    }
  }
}
</script>
