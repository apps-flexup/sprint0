<template lang="pug">
.fv-status-progress
  v-menu(offset-y)
    template(v-slot:activator="{on, attrs}")
      v-progress-linear(
        :value="config.value"
        :color="config.color"
        :striped="config.striped"
        height="20"
        rounded=''
        v-bind="attrs"
        @click.native.stop
        v-on="on"
        :key="theme"
      )
        template(v-slot="data")
          strong {{ statusDisplay }}
    v-radio-group(
      v-model="statusData"
      v-for="(status, index) in statusAvailable" :key="index"
    )
      v-radio(
        :value="status.name"
      )
      v-progress-linear(
        :value="status.value"
        :color="status.color"
        :striped="status.striped"
        height="20"
        rounded=''
        :key="theme"
      )
        template(v-slot="data")
          strong {{ status.name }}
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
      },
      statusAvailable: [
        {
          name: 'active',
          color: 'green',
          value: 100,
          striped: true
        },
        {
          name: 'inactive',
          color: 'grey',
          value: 50,
          striped: true
        },
        {
          name: 'archived',
          color: 'blue',
          value: 100,
          striped: true
        }
      ],
      statusData: this.status
    }
  },
  computed: {
    theme() {
      const res = this.$activeAccount.settings().theme
      return res
    },
    statusDisplay() {
      const item = {
        status: this.statusData
      }
      const res = this.$displayRules.status(item)
      return res
    }
  },
  watch: {
    statusData() {
      this.config = statusProgress(this.$vuetify, this.statusData)
      this.$emit('status:changed', this.statusData)
      this.$emit('status:clicked')
    },
    theme: {
      deep: true,
      handler() {
        this.config = statusProgress(this.$vuetify, this.statusData)
      }
    }
  },
  mounted() {
    this.config = statusProgress(this.$vuetify, this.statusData)
    this.$store.dispatch('settings/getSettings')
  }
}
</script>
