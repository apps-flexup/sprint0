<template lang="pug">
.fv-vat-field
  fv-number-field(
    :value="vat"
    :label="label"
    :outlined="outlined"
    :readonly="readonly"
    :hideDetails="hideDetails"
    :dense="dense"
    data-testid="vatField"
    suffix="%"
    @input="vatChanged"
    @click:outside="onClickOutside"
  )
</template>

<script>
export default {
  name: 'FvVatField',
  props: {
    value: {
      type: [String, Number],
      default() {
        return ''
      }
    },
    label: {
      type: String,
      default() {
        return ''
      }
    },
    outlined: {
      type: Boolean,
      default() {
        return true
      }
    },
    readonly: {
      type: Boolean,
      default() {
        return false
      }
    },
    hideDetails: {
      type: Boolean,
      default() {
        return false
      }
    },
    dense: {
      type: Boolean,
      default() {
        return false
      }
    }
  },
  data() {
    return {
      vat: this.value
    }
  },
  watch: {
    value() {
      this.vat = this.value
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    vatChanged(v) {
      this.vat = v
      this.$emit('vat:changed', this.vat)
      this.emitGenericSignalForForm(this.vat)
    },
    onClickOutside() {
      if (this.vat) {
        this.vat = (Math.round(this.vat * 100) / 100).toFixed(1)
        this.vatChanged(this.vat)
      }
    },
    emitGenericSignalForForm(payload) {
      this.$emit('payload:changed', payload)
    }
  }
}
</script>
