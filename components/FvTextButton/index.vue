<template lang="pug">
.fv-text-button
  fv-flex-items
    template(v-slot:left)
      div(data-testid='slot-icon')
        slot(name="icon")
    template(v-slot:right)
      v-btn(
        data-testid="button"
        color='blue darken-1'
        text=''
        @click.stop='click'
      )
        slot(name="text")
</template>

<script>
export default {
  name: 'FvTextButton',
  methods: {
    click() {
      this.$emit('button:click')
    }
  }
}
</script>
