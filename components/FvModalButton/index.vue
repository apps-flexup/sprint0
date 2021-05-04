<template lang="pug">
.fv-modal-button
  div(data-testid='slot-icon')
    slot(name="icon")
  v-btn(
    data-testid="button"
    color='blue darken-1'
    text=''
    @click.stop='click'
  )
    slot
</template>

<script>
export default {
  name: 'FvCloseModalButton',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    click() {
      this.$emit('button:click')
    }
  }
}
</script>
