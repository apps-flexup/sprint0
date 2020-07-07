<template lang="pug">
  v-progress-linear(
    :value="config.value"
    :color="config.color"
    :striped="config.striped"
    height="20"
    rounded=''
  )
    template(v-slot="data")
      strong {{ status }}
</template>

<script>
import { statusProgress } from '~/plugins/colorMaps'
export default {
  name: 'FvStatusProgressAtom',
  props: {
    status: {
      type: String,
      default: 'reserved'
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
    this.config = statusProgress(this.$vuetify, this.status)
  }
}
</script>
