<template lang="pug">
.fv-modal-and-button
    fv-primary-button(
      @click.stop="dialog = true"
    ) {{ buttonText }}
    fv-modal(
      :dialog="dialog"
      :title="title"
      :subtitle="subtitle"
      :component="component"
      @modal:close="close"
      @modal:save="save"
    )
</template>

<script>
export default {
  name: 'FvModalAndButton',
  props: {
    buttonText: {
      type: String,
      default() {
        return ''
      }
    },
    component: {
      type: String,
      default() {
        return ''
      }
    },
    subtitle: {
      type: String,
      default() {
        return ''
      }
    },
    title: {
      type: String,
      default() {
        return 'Beautiful title'
      }
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
      this.dialog = false
    },
    save(payload) {
      this.$emit('save', payload)
      this.dialog = false
    }
  }
}
</script>
<style scoped>
.fv-modal-and-button {
  background-color: inherit;
}
</style>
