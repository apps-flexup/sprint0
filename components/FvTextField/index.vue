<template lang="pug">
.fv-text-field
  v-text-field(
    v-model="model"
    :label="label"
    :outlined="outlined"
    :append-outer-icon="appendOuterIcon"
    :suffix="suffix"
    @input="inputChanged"
  )
    template(v-slot:append)
      slot(name="append")
    template(v-slot:prepend)
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
    }
  }
}
</script>
