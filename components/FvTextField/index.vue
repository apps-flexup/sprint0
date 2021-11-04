<template lang="pug">
.fv-text-field
  v-text-field(
    data-testid="textField"
    v-model="model"
    v-click-outside="onClickOutside"
    :label="label"
    :outlined="outlined"
    :append-outer-icon="appendOuterIcon"
    :append-icon="appendIcon"
    :suffix="suffix"
    :readonly="readonly"
    :clearable="clearable"
    :hide-details="hideDetails"
    :dense="dense"
    @input="inputChanged"
    @click="clicked"
    @keydown.enter="enterPressed"
  )
    template(v-slot:append)
      slot(name="append")
    template(v-slot:prepend)
      slot(name="prepend")
    template(v-slot:prepend-inner)
      slot(name="prepend-inner")
</template>

<script>
export default {
  name: 'FvTextField',
  props: {
    label: {
      type: String,
      default() {
        return ''
      }
    },
    appendOuterIcon: {
      type: String,
      default() {
        return ''
      }
    },
    appendIcon: {
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
    value: {
      type: [Number, String],
      default() {
        return ''
      }
    },
    suffix: {
      type: String,
      default() {
        return ''
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
      model: this.value
    }
  },
  watch: {
    value() {
      this.model = this.value
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    inputChanged() {
      this.$emit('input', this.model)
      this.emitGenericSignalForForm()
    },
    clicked() {
      this.$emit('click')
    },
    onClickOutside() {
      this.$emit('click:outside')
    },
    enterPressed() {
      this.$emit('enterPressed')
    },
    emitGenericSignalForForm() {
      this.$emit('payload:changed', this.model)
    }
  }
}
</script>
