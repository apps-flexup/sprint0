<template lang="pug">
.fv-visibility-switch
  v-switch(
    data-testid="switch"
    :input-value="inputValue"
    :label="`Visibility: ${value}`"
    inset
    @change="clicked"
  )
</template>

<script>
export default {
  name: 'FvVisibilitySwitch',
  props: {
    value: {
      type: String,
      default() {
        return 'public'
      }
    }
  },
  computed: {
    inputValue() {
      return this.value === 'public'
    }
  },
  methods: {
    clicked() {
      let newVisibility
      if (this.value === 'public') newVisibility = 'private'
      else newVisibility = 'public'
      this.$emit('visibility:changed', newVisibility)
    }
  }
}
</script>
