<template lang="pug">
  .fv-modal
    v-dialog(
      v-model='dialog'
      persistent
      max-width='50%'
    )
      v-card
        v-card-title
          span.headline {{ this.title }}
        v-card-subtitle
          span {{ this.subtitle }}
        v-card-text
          v-container
            component(
              :is="component"
              :values='values'
            )
        v-card-actions
          v-spacer
          v-btn(color='blue darken-1' text='' @click='close') {{ $t('modal.close') }}
          v-btn(color='blue darken-1' text='' @click='save') {{ $t('modal.save') }}
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
