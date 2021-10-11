<template lang="pug">
.fv-status-readonly
  v-btn(
    :color="config.color"
    :rounded="true"
    :retain-focus-on-click="true"
    :depressed="true"
  )
    |{{ value }}
</template>

<script>
import { statusProgress } from '~/plugins/colorMaps'
export default {
  name: 'FvStatusProgress',
  props: {
    value: {
      type: String,
      default: 'draft'
    }
  },
  data() {
    return {
      config: {
        color: 'purple',
        value: 50,
        striped: true
      }
    }
  },
  mounted() {
    this.config = statusProgress(this.$vuetify, this.value)
    this.$store.dispatch('settings/getSettings')
  }
}
</script>

<style scoped>
::v-deep .v-btn {
  cursor: not-allowed !important;
}
</style>
