<template lang="pug">
.fv-status-progress
  v-progress-linear(
    :value="config.value"
    :color="config.color"
    :striped="config.striped"
    height="20"
    rounded=''
    :key="theme"
  )
    template(v-slot="data")
      strong {{ status }}
</template>

<script>
import { statusProgress } from '~/plugins/colorMaps'
export default {
  name: 'FvStatusProgress',
  props: {
    status: {
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
  computed: {
    theme() {
      const res = this.$activeAccount.settings().theme
      return res
    }
  },
  watch: {
    status() {
      this.config = statusProgress(this.$vuetify, this.status)
    },
    theme: {
      deep: true,
      handler() {
        this.config = statusProgress(this.$vuetify, this.status)
      }
    }
  },
  mounted() {
    this.config = statusProgress(this.$vuetify, this.status)
    this.$store.dispatch('settings/getSettings')
  }
}
</script>
