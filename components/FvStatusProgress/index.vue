<template lang="pug">
.fv-status-progress
  v-menu(offset-y)
    template(v-slot:activator="{on, attrs}")
      v-btn(
        :color="config.color"
        :rounded="true"
        :readonly="true"
        :depressed="true"
        v-on="on"
        v-bind="attrs"
      )
        |{{ status }}
    v-radio-group(
      v-for="(item, index) in statusAvailable" :key="index"
    )
      v-btn(
        @click="changeStatus(item)"
      )
        | {{ item }}
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
      },
      statusAvailable: ['active', 'inactive', 'archived']
    }
  },
  watch: {
    value() {
      this.config = statusProgress(this.$vuetify, this.value)
    }
  },
  computed: {
    status: {
      get() {
        return this.value
      },
      set(newStatus) {
        this.changeStatus(newStatus)
      }
    }
  },
  mounted() {
    this.config = statusProgress(this.$vuetify, this.value)
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    changeStatus(newStatus) {
      this.$emit('payload:changed', newStatus)
      this.$emit('status:clicked', newStatus)
    }
  }
}
</script>
