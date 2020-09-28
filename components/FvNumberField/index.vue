<template lang="pug">
.fv-number-field
  fv-text-field(
    class="right-input"
    :value="inputValue"
    :label="label"
    :outlined="outlined"
    :readonly="readonly"
    :clearable="clearable"
    :suffix="suffix"
    :hideDetails="hideDetails"
    :dense="dense"
    @input="input"
    @click:outside="onClickOutside"
  )
</template>

<script>
export default {
  name: 'FvNumberField',
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
    },
    suffix: {
      type: String,
      default() {
        return ''
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
      inputValue: this.value
    }
  },
  watch: {
    value() {
      this.inputValue = this.value
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    input(v) {
      this.inputValue = v
      this.$emit('input', this.inputValue)
    },
    onClickOutside() {
      this.$emit('click:outside')
    }
  }
}
</script>

<style scoped>
.right-input >>> input {
  text-align: right;
}
</style>
