<template lang="pug">
  fv-modal-slot(:dialog="show")
    template(
      slot='title'
    )
      v-toolbar(flat='')
        v-toolbar-title {{ $t('forms.offers.new.title') }}
        v-spacer
        v-btn(
          icon=''
          @click.stop="close"
        )
          v-icon mdi-close
    template(
      slot='form'
    )
      fv-offer-form(
        :offer="offer"
        @offer:changed="offerChanged"
      )
    template(
      slot='actions'
    )
      v-spacer
      v-btn(
        color='blue darken-1'
        text=''
        @click.stop='close'
      ) {{ $t('modal.close') }}
      v-btn(
        color='blue darken-1'
        text=''
        @click.stop='save'
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
    offer: {
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
      this.$emit('modal:save')
    },
    offerChanged(offer) {
      this.$emit('offer:changed', offer)
    }
  }
}
</script>
