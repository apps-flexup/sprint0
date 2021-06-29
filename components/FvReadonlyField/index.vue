<template lang="pug">
.fv-readonly-field
  v-row(:style="cssVars")
    v-col(v-if="label" cols="2")
      div.text {{ label + $t('ponctuation.colons') }}
    v-col(cols="10")
      div.text {{ value }}
</template>

<script>
export default {
  name: 'FvReadonlyField',
  props: {
    label: {
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
.text {
  color: var(--textColor) !important;
}
::v-deep .col {
  padding: 3px;
}
</style>
