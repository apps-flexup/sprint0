<template lang="pug">
.fv-status-progress
  v-menu(
    max-width=200
    rounded="xl"
    offset-y
  )
    template(v-slot:activator="{on, attrs}")
      div(
        max-width=130
        v-on="on"
        v-bind="attrs"
      )
        fv-status(
          :status="status"
        )
          template(v-slot:icon)
            fv-icon(
              icon="mdi-chevron-down"
              size="small"
            )
    v-radio-group(
      v-for="(item, index) in availableStatus" :key="index"
      v-model="value"
    )
      fv-flex-items
        template(v-slot:left)
          v-radio.mb-0(
            @click="changeStatus(item)"
            :value="item"
          )
        template(v-slot:right)
          fv-status(
            :status="item"
            @status:clicked="changeStatus(item)"
          )
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
    },
    availableStatus() {
      return this.$store.getters['products/availableStatus']
    }
  },
  methods: {
    changeStatus(newStatus) {
      this.$emit('payload:changed', newStatus)
      this.$emit('status:clicked', newStatus)
    }
  }
}
</script>

<style scoped>
.v-menu__content {
  background: white;
  padding: 0 1rem 1rem 1rem;
}
::v-deep .v-messages {
  display: none;
}
::v-deep .v-input__slot {
  margin: inherit;
}
.fv-icon {
  position: absolute;
  left: 90%;
}
</style>
