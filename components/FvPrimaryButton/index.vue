<template lang="pug">
.fv-primary-button
  v-btn(
    data-testid="button"
    :disabled="disabled"
    x-large
    color="#FCBF1E"
    @click.prevent="click"
  )
    slot
</template>

<script>
export default {
  name: 'FvPrimaryButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('button:click')
    },
  },
}
</script>

<style scoped>
.v-btn {
  border-radius: 10px;
  color: #ffffff;
}
</style>
