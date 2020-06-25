<template lang="pug">
  .fv-modal
    v-dialog(
      v-model='dialog'
      persistent
      max-width='600px'
    )
      v-card
        v-card-title
          span.headline {{ this.title }}
        v-card-text
          v-container
            component(
              :is="component"
              :values='values'
            )
        v-card-actions
          v-spacer
          v-btn(color='blue darken-1' text='' @click='close') Close
          v-btn(color='blue darken-1' text='' @click='save') Save
</template>

<script>
export default {
  name: 'FvModal',
  props: {
    component: {
      type: String,
      default() {
        return ''
      }
    },
    dialog: {
      type: Boolean,
      default() {
        return false
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
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.$emit('close')
    },
    save() {
      this.$emit('save', this.values)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-modal {
  background-color: inherit;
}
</style>
