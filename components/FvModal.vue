<template lang="pug">
.fv-modal
  v-dialog(
    v-model='dialog'
    persistent
    max-width='50%'
  )
    v-toolbar()
      v-app-bar-nav-icon
      v-toolbar-title {{ this.title }}
      v-spacer
      v-btn(icon @click.prevent="close")
        v-icon mdi-close
    v-card
      v-card-subtitle(v-if="this.subtitle")
        span.headline {{ this.subtitle }}
      v-card-text
        v-container
          component(
            :is="component"
            :values='values'
          )
      v-card-actions
        v-spacer
        fv-modal-actions(
          @modal:actions:close="close"
          @modal:actions:save="save"
        )
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
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    close() {
      this.$emit('modal:close')
    },
    save() {
      this.$emit('modal:save', this.values)
    }
  }
}
</script>
<style scoped>
.fv-modal {
  background-color: inherit;
}
</style>
