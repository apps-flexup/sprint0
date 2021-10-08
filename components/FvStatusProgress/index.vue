<template lang="pug">
.fv-status-progress
  v-menu(offset-y)
    template(v-slot:activator="{on, attrs}")
      v-progress-linear(
        :value="config.value"
        :color="config.color"
        :striped="config.striped"
        :key="theme"
        height="20"
        rounded=''
        v-bind="attrs"
        v-on="on"
      )
        template(v-slot="data")
          strong {{ statusDisplay }}
    v-radio-group(
      v-model="status"
      v-for="(item, index) in statusAvailable" :key="index"
    )
      v-radio(
        :value="item.name"
      )
      v-progress-linear(
        :value="item.value"
        :color="item.color"
        :striped="item.striped"
        height="20"
        rounded=''
        :key="theme"
      )
        template(v-slot="data")
          strong {{ item.name }}
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
          color: 'grey',
          value: 100,
          striped: true
        }
      ],
      status: this.value
    }
  },
  computed: {
    theme() {
      const res = this.$activeAccount.settings().theme
      return res
    },
    statusDisplay() {
      const item = {
        status: this.status
      }
      const res = this.$displayRules.status(item)
      return res
    }
  },
  watch: {
    status() {
      this.config = statusProgress(this.$vuetify, this.status)
      this.$emit('status:changed', this.status)
      this.$emit('status:clicked')
      this.$emit('value:changed', this.status)
    },
    value() {
      this.status = this.value
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
