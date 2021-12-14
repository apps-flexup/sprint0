<template lang="pug">
.fv-primary-button
  v-btn(
    data-testid="button"
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
    icon: {
      type: String,
      default() {
        return null
      }
    }
  },
  methods: {
    click() {
      this.$emit('button:click')
    }
  }
}
</script>

<style scoped>
.v-btn {
  border-radius: 10px;
  color: #ffffff;
}
</style>
