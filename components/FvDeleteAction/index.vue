<template lang="pug">
  .fv-delete-action
    v-icon(small='' @click.stop="clicked")
      | mdi-delete
</template>

<script>
export default {
  name: 'FvDeleteAction',
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    clicked() {
      this.$emit('delete:clicked')
    }
  }
}
</script>
