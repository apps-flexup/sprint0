<template lang="pug">
.fv-readonly-field
  div(:style="cssVars")
    h3.font-weight-regular {{ title }}
    div.value {{ value }}
    v-divider.divider
</template>

<script>
export default {
  name: 'FvReadonlyField',
  props: {
    title: {
      type: String,
      default() {
        return null
      }
    },
    value: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    cssVars() {
      const settings = this.$store.getters['settings/settings']
      const theme = settings.theme
      const color = theme === 'light' ? 'black' : 'white'
      const res = {
        '--textColor': color
      }
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getSettings')
  }
}
</script>

<style scoped>
.value {
  color: var(--textColor) !important;
  margin-top: 10px;
}
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
