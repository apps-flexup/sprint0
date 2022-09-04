<template lang="pug">
.fv-number-field
  fv-text-field(
    data-testid="numberField"
    class="right-input"
    :value="inputValue"
    :label="label"
    :outlined="outlined"
    :readonly="readonly"
    :suffix="suffix"
    :hideDetails="hideDetails"
    :dense="dense"
    type="number"
    @input="input"
    @click="onClick"
    @click:outside="onClickOutside"
  )
</template>

<script>
export default {
  name: 'FvNumberField',
  props: {
    value: {
      type: [Number, String],
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
  methods: {
    input(v) {
      this.inputValue = v
      this.$emit('input', this.inputValue)
    },
    onClick() {
      this.$emit('click')
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
