<template lang="pug">
.fv-partner-modal
  fv-modal-slot(:dialog="show")
    template(
      slot='title'
    )
      v-toolbar(flat='')
        v-toolbar-title {{ $t('forms.partners.new.title') }}
        v-spacer
        v-btn(
          icon=''
          @click.stop="close"
        )
          v-icon mdi-close
    template(
      slot='form'
    )
      fv-new-partner-form(
        :partner="partner"
        @partner:changed="partnerChanged"
      )
    template(
      slot='actions'
    )
      v-spacer
      fv-modal-actions(
        @modal:actions:close="close"
        @modal:actions:save="save"
      )
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
  methods: {
    close() {
      this.$emit('modal:close')
    },
    save() {
      this.$emit('modal:save', this.partner)
    },
    partnerChanged(partner) {
      this.$emit('partner:changed', partner)
    }
  }
}
</script>
