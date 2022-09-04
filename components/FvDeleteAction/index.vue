<template lang="pug">
.fv-delete-action
  v-icon(
    data-testid="deleteIcon"
    small
    @click.stop="clicked"
  )
    | mdi-delete
</template>

<script>
export default {
  name: 'FvDeleteAction',
  methods: {
    clicked() {
      this.$emit('delete:clicked')
    }
  }
}
</script>
