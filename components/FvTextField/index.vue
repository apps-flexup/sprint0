<template lang="pug">
.fv-text-field
  v-text-field(
    :style="cssVars"
    data-testid="textField"
    v-model="model"
    v-click-outside="onClickOutside"
    :label="label"
    :outlined="outlined"
    :regular="regular"
    :append-outer-icon="appendOuterIcon"
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
    outlined: {
      type: Boolean,
      default() {
        return true
      }
    },
    regular: {
      type: Boolean,
      default() {
        return false
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
    backgroundEdit: {
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
  computed: {
    cssVars() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      const bgColor = theme === 'light' ? '#FFFFFF' : '#1E1E1E'
      if (!this.readonly || this.backgroundEdit) {
        const bgColor = theme === 'light' ? '#F9FCFF' : '#1E1E1E'
        const res = {
          '--bgColor': bgColor
        }
        return res
      }
      return bgColor
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

<style scoped>
::v-deep .v-input__slot {
  background-color: var(--bgColor) !important;
}
</style>
