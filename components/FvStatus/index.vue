<template lang="pug">
.fv-status
  v-btn(
    data-testid="statusBtn"
    :color="color"
    :rounded="true"
    :readonly="true"
    :depressed="true"
    min-width=130
    @click="statusClicked"
  )
    |{{ $t(`status.${status}`) }}
    slot(name="icon")
</template>

<script>
export default {
  name: 'FvStatus',
  props: {
    status: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      colors: {
        active: '#9FE4A6',
        inactive: '#FFCD92',
        archived: '#EDEDED'
      }
    }
  },
  computed: {
    color() {
      const color = this.colors[this.status]
      return color
    }
  },
  methods: {
    statusClicked() {
      this.$emit('status:clicked')
    }
  }
}
</script>
