<template lang="pug">
  fv-modal-slot(:dialog="show")
    template(
      slot='title'
    )
      v-toolbar(flat='')
        v-toolbar-title {{ $t('forms.partners.new.title') }}
        v-spacer
        v-btn(
          icon=''
          @click="close"
        )
          v-icon mdi-close
    template(
      slot='form'
    )
      fv-new-partner-form(:values="partner")
    template(
      slot='actions'
    )
      v-spacer
      v-btn(
        color='blue darken-1'
        text=''
        @click='close'
      ) {{ $t('modal.close') }}
      v-btn(
        color='blue darken-1'
        text=''
        @click='save'
      ) {{ $t('modal.save') }}
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default() {
        return false
      }
    },
    partner: {
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
      this.$emit('modal:save', this.partner)
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-partner-modal {
  background-color: inherit;
}
</style>
