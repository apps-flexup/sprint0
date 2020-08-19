<template lang="pug">
.fv-plus-button
  v-btn(
    icon
    @click.stop="plus"
  )
    v-icon mdi-plus
</template>

<script>
export default {
  name: 'FvPlusButton',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    plus() {
      this.$emit('button:plus')
    }
  }
}
</script>
