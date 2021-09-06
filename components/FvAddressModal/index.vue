<template lang="pug">
.fv-address-modal
  fv-modal-slot(
    data-testid="modal"
    :dialog="dialog"
  )
    template(v-slot:title)
      v-toolbar(flat)
        v-toolbar-title {{ $t('forms.addresses.title') }}
        v-spacer
        v-btn(
          icon
          @click.stop="close"
        )
          v-icon mdi-close
    template(v-slot:form)
      v-row
        v-col.md-12.sm-12.lg-12.xl-12(cols='12')
          v-textarea(
            data-testid='street'
            :value="street"
            outlined
            :label="$t('forms.addresses.street')"
            rows='3'
            @input="streetChanged"
          )
      v-row
        v-col.md-4.sm-4.lg-4.xl-4(cols='4')
          fv-text-field(
            data-testid='zip'
            :value="zip"
            :label="$t('forms.addresses.zip')"
            @input="zipChanged"
        )
        v-col.md-8.sm-8.lg-8.xl-8(cols='8')
          fv-text-field(
            data-testid='city'
            :value="city"
            :label="$t('forms.addresses.city')"
            @input="cityChanged"
          )
      v-row
        v-col.md-10.sm-10.lg-10.xl-10(cols='10')
          fv-country-autocomplete(
            data-testid='country'
            :value="country"
            :label="$t('forms.addresses.country')"
            @country:selected="countrySelected"
          )
    template(v-slot:actions)
      v-spacer
      fv-modal-actions(
        @modal:actions:close="close"
        @modal:actions:save="save"
      )
</template>

<script>
export default {
  name: 'FvAddressModal',
  props: {
    dialog: {
      type: Boolean,
      default() {
        return false
      }
    },
    address: {
      type: Object,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      localAddress: this.address ? JSON.parse(JSON.stringify(this.address)) : {}
    }
  },
  computed: {
    street() {
      const res = this.localAddress.street
      return res
    },
    zip() {
      const res = this.localAddress.zip
      return res
    },
    city() {
      const res = this.localAddress.city
      return res
    },
    country() {
      const res = this.localAddress.country
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    streetChanged(v) {
      this.localAddress.street = v
      this.$emit('modal:payload:changed', this.localAddress)
    },
    zipChanged(v) {
      this.localAddress.zip = v
      this.$emit('modal:payload:changed', this.localAddress)
    },
    cityChanged(v) {
      this.localAddress.city = v
      this.$emit('modal:payload:changed', this.localAddress)
    },
    countrySelected(v) {
      this.localAddress.country = v
      this.$emit('modal:payload:changed', this.localAddress)
    },
    save() {
      this.$emit('modal:actions:save', this.localAddress)
    },
    close() {
      this.localAddress = JSON.parse(JSON.stringify(this.address))
      this.$emit('modal:actions:close')
    }
  }
}
</script>

<style scoped>
.right {
  margin-left: 15px;
}
</style>
