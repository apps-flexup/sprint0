<template lang="pug">
  .fv-modal-and-button
      fv-create-button(
        :text="buttonText"
        @click="dialog = true"
      )
      fv-modal(
        :dialog="dialog"
        :title="title"
        :component="component"
        :values="values"
        @close="close"
        @save="save"
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
    },
    values: {
      type: Object,
      default() {
        return {}
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
<style lang="scss" scoped>
.fv-modal-and-button {
  background-color: inherit;
}
</style>
