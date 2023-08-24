<template lang="pug">
.fv-address-field
  fv-media-field(
    data-testid="addressField"
    :mediaValue="mediaValue"
    :mediaLabel="addressLabel"
    :labelValue="labelValue"
    :isMediaValueReadonly="true"
    @media:value:clicked="valueClicked"
    @media:label:changed="labelChanged"
    @media:delete:clicked="deleteClicked"
  )
  fv-address-modal(
    data-testid="modal"
    :dialog="displayModal"
    :address="localAddress"
    @modal:payload:changed="addressChanged"
    @modal:actions:close="close"
    @modal:actions:save="save"
  )
</template>

<script>
import { addressToString } from '~/plugins/utils'

export default {
  name: 'FvAddressField',
  props: {
    address: {
      type: Object,
      default() {
        return {}
      }
    },
    labelValue: {
      type: String,
      default() {
        return null
      }
    }
  },
  data() {
    return {
      localAddress: JSON.parse(JSON.stringify(this.address)),
      displayModal: false,
      valueType: 'Address',
      addressLabel: this.$t('mediaField.address.placeholder')
    }
  },
  computed: {
    mediaValue() {
      const res = addressToString(this.$store, this.address)
      return res
    }
  },
  watch: {
    address() {
      this.localAddress = JSON.parse(JSON.stringify(this.address))
    }
  },
  mounted() {
    this.$store.dispatch('countries/get')
  },
  methods: {
    valueClicked() {
      this.displayModal = true
    },
    labelChanged(v) {
      const payload = {
        value_type: this.valueType,
        label: v
      }
      this.$emit('address:label:changed', payload)
    },
    deleteClicked() {
      this.$emit('address:delete:clicked')
    },
    addressChanged(v) {
      this.localAddress = v
    },
    close() {
      this.localAddress = JSON.parse(JSON.stringify(this.address))
      this.displayModal = false
    },
    save(v) {
      this.displayModal = false
      this.localAddress = v
      const payload = {
        value_type: this.valueType,
        value: this.localAddress
      }
      this.$emit('address:value:changed', payload)
    }
  }
}
</script>

<style scoped>
.right {
  margin-left: 15px;
}
</style>
