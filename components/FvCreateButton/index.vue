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
import { VBtn } from 'vuetify/lib'

export default {
  name: 'FvCreateButton',
  components: {
    VBtn
  },
  methods: {
    click() {
      this.$emit('button:click')
    }
  }
}
</script>
<style scoped>
.fv-create-button {
  background-color: inherit;
}
</style>
