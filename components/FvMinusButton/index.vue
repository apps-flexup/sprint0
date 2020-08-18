<template lang="pug">
.fv-minus-button
  v-btn(
    icon
    @click.stop="minus"
  )
    v-icon mdi-minus
</template>

<script>
export default {
  name: 'FvMinusButton',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    minus() {
      this.$emit('button:minus')
    }
  }
}
</script>
