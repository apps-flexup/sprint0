<template lang="pug">
.fv-th
  div(
    data-testid="div"
    @click="clicked"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  )
    fv-flex-items
      template(v-slot:left)
        div(data-testid="text") {{ text }}
      template(v-slot:right)
        fv-icon(
          data-testid="sortIcon"
          v-if="sortable"
          :icon="sortIcon"
          size="small"
          :color="sortIconColor"
        )
</template>

<script>
export default {
  name: 'FvTh',
  props: {
    text: {
      type: String,
      default() {
        return null
      },
    },
    sortKey: {
      type: String,
      default() {
        return null
      },
    },
    sortable: {
      type: Boolean,
      default() {
        return false
      },
    },
    isSorted: {
      type: Boolean,
      default() {
        return false
      },
    },
    isSortedDesc: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      over: false,
    }
  },
  computed: {
    sortIcon() {
      let res = 'mdi-arrow-up'
      if (this.isSortedDesc) res = 'mdi-arrow-down'
      return res
    },
    sortIconColor() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      let res = 'black'
      if (theme === 'dark') res = 'white'
      if (!this.isSorted && this.over) res = '#B8B8B8'
      else if (!this.isSorted && !this.over) res = 'transparent'
      return res
    },
  },
  mounted() {
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    clicked() {
      if (this.sortable) this.$emit('th:sort', this.sortKey)
    },
    mouseover() {
      this.over = true
    },
    mouseleave() {
      this.over = false
    },
  },
}
</script>

<style scoped>
.fv-th {
  cursor: pointer;
}
</style>
