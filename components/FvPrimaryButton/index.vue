<template lang="pug">
.fv-primary-button
  v-btn(
    x-large
    color="#FCB71C"
    @click.prevent="click"
  )
    slot
</template>

<script>
export default {
  name: 'FvPrimaryButton',
  methods: {
    click() {
      this.$emit('button:click')
    }
  }
}
</script>
