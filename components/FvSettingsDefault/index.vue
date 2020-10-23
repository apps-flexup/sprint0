<template lang="pug">
.fv-settings-default
  pre {{ settings }}
  fv-language-autocomplete(
    :language="language"
    @language:selected="languageSelected"
  )
  fv-currency-autocomplete(
    :currency="currency"
    @currency:selected="currencySelected"
  )
  fv-theme-autocomplete(
    :theme="theme"
    @theme:selected="themeSelected"
  )
</template>

<script>
export default {
  name: 'FvSettingsDefault',
  props: {
    account: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    settings() {
      const res = this.$activeAccount.settings()
      return res
    },
    currency() {
      const res = this.settings ? this.settings.currency : null
      return res
    },
    language() {
      const res = this.settings ? this.settings.language : null
      return res
    },
    theme() {
      const res = this.settings ? this.settings.theme : null
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    currencySelected(v) {
      const newSettings = this.settings
      newSettings.currency = v
      this.$store.dispatch('settings/updateSettings', newSettings)
    },
    languageSelected(v) {
      const newSettings = this.settings
      newSettings.language = v
      this.$store.dispatch('settings/updateSettings', newSettings)
    },
    themeSelected(v) {
      const newSettings = this.settings
      newSettings.theme = v
      console.log('this: ', this)
      this.$store.dispatch('settings/updateSettings', newSettings)
    }
  }
}
</script>
