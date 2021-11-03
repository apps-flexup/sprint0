<template lang="pug">
.fv-modal-header
  v-toolbar(flat)
    v-toolbar-title(data-testid="title") {{ title }}
    v-spacer
    v-btn(
      data-testid="closeButton"
      icon
      @click="close"
    )
      v-icon mdi-close
</template>

<script>
export default {
  name: 'FvModalHeader',
  props: {
    title: {
      type: String,
      default() {
        return null
      }
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.$emit('modal:header:close')
    }
  }
}
</script>

<style scoped>
.fv-modal-header {
  width: 100%;
}
</style>
