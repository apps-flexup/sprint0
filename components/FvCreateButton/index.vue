<template lang="pug">
.fv-create-button
  v-btn(
    x-large
    color="#FCB71C"
    @click.prevent="click"
  )
    slot
</template>

<script>
export default {
  name: 'FvCreateButton',
  methods: {
    click() {
      this.$emit('button:click')
    }
  }
}
</script>
