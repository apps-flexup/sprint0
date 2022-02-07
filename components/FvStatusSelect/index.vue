<template lang="pug">
.fv-status-select
  v-menu(
    max-width=200
    rounded="xl"
    offset-x
  )
    template(v-slot:activator="{on, attrs}")
      div(
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
            :value="item"
            @click="changeStatus(item)"
          )
        template(v-slot:right)
          fv-status(
            :status="item"
            @status:clicked="changeStatus(item)"
          )
</template>

<script>
export default {
  name: 'FvStatusSelect',
  props: {
    value: {
      type: String,
      default: 'draft',
    },
    availableStatus: {
      type: Array,
      default() {
        return []
      },
    },
  },
  computed: {
    status: {
      get() {
        return this.value
      },
      set(newStatus) {
        this.changeStatus(newStatus)
      },
    },
  },
  methods: {
    changeStatus(newStatus) {
      this.$emit('payload:changed', newStatus)
      this.$emit('status:changed', newStatus)
    },
  },
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
