<template lang="pug">
.fv-theme-select
  v-select(
    :items="items"
    :outlined="true"
    :value="value"
    :label="$t('themes.theme')"
    @input="selected"
  )
</template>

<script>
export default {
  name: 'FvThemeSelect',
  inheritAttrs: true,
  computed: {
    items() {
      const res = [
        {
          text: this.$t('themes.light'),
          value: 0
        },
        {
          text: this.$t('themes.dark'),
          value: 1
        }
      ]
      return res
    },
    value() {
      const res = 0
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$vuetify.theme.dark = v
    }
  }
}
</script>
