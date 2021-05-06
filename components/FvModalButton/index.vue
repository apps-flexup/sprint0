<template lang="pug">
.fv-modal-button
  fv-text-button(
    data-testid='modal-button'
    @button:click="click"
  )
    template(v-slot:text)
      slot(name='modal-text')
        | {{ text }}
</template>

<script>
export default {
  name: 'FvModalButton',
  props: {
    text: {
      type: String,
      default() {
        return null
      }
    }
  },
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
