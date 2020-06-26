<template lang="pug">
  .fv-create-button
    v-btn(
      x-large
      color="#FCB71C"
      @click="click"
    ) {{ this.text }}
</template>

<script>
export default {
  name: 'FvCreateButton',
  props: {
    text: {
      type: String,
      default() {
        return 'Beautiful button'
      }
    }
  },
  methods: {
    click() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss" scoped>
.fv-create-button {
  background-color: inherit;
}
</style>
