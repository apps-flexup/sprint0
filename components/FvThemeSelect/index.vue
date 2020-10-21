<template lang="pug">
.fv-theme-select
  v-select(
    :items="items"
    :outlined="true"
    :value="theme"
    :label="$t('themes.theme')"
    @input="selected"
  )
</template>

<script>
export default {
  name: 'FvThemeSelect',
  inheritAttrs: true,
  props: {
    theme: {
      type: String,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = [
        {
          text: this.$t('themes.light'),
          value: 'light'
        },
        {
          text: this.$t('themes.dark'),
          value: 'dark'
        }
      ]
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      if (v) this.$emit('theme:selected', v)
    }
  }
}
</script>
