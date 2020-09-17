<template lang="pug">
.fv-vat-field
  fv-number-field(
    :value="vat"
    :label="label"
    :outlined="outlined"
    :readonly="readonly"
    :clearable="clearable"
    suffix="%"
    @input="vatChanged"
  )
</template>

<script>
export default {
  name: 'FvPriceField',
  props: {
    value: {
      type: String,
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
    clearable: {
      type: Boolean,
      default() {
        return true
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
    }
  }
}
</script>
