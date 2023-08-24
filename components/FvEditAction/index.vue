<template lang="pug">
.fv-edit-action
  v-icon.mr-2(
    data-testid="editIcon"
    small
    @click="clicked"
  )
    | mdi-pencil
</template>

<script>
export default {
  name: 'FvEditAction',
  methods: {
    clicked() {
      this.$emit('edit:clicked')
    }
  }
}
</script>
