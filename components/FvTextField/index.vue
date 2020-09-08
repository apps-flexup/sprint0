<template lang="pug">
.fv-text-field
  v-text-field(
    v-model="model"
    v-click-outside="onClickOutside"
    :label="label"
    :outlined="outlined"
    :append-outer-icon="appendOuterIcon"
    :suffix="suffix"
    :readonly="readonly"
    :clearable="clearable"
    @input="inputChanged"
    @click="clicked"
  )
    template(v-slot:append)
      slot(name="append")
    template(v-slot:prepend-inner)
      slot(name="prepend")
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
    value: {
      type: String,
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
    },
    clicked() {
      this.$emit('click')
    },
    onClickOutside() {
      this.$emit('click:outside')
    }
  }
}
</script>
