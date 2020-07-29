<template lang="pug">
  .fv-text-field
    v-text-field(
      v-model="model"
      :label="label"
      :outlined="outlined"
      @input="inputChanged"
    )
</template>

<script>
export default {
  name: 'FvAutocomplete',
  inheritAttrs: true,
  props: {
    label: {
      type: String,
      default() {
        return 'Default label'
      }
    },
    outlined: {
      type: Boolean,
      default() {
        return true
      }
    }
  },
  data() {
    return {
      model: null
    }
  },
  mounted() {
    console.log('Composant', this.$options.name)
  },
  methods: {
    inputChanged() {
      console.log('input changed: ', this.model)
      this.$emit('textField:changed', this.model)
    }
  }
}
</script>
