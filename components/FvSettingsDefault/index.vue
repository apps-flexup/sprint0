<template lang="pug">
.fv-settings-default
  fv-language-autocomplete(
    data-testid="languageAutocomplete"
    :language="language"
    @language:selected="languageSelected"
  )
  fv-currency-autocomplete(
    data-testid="currencyAutocomplete"
    :currency="currency"
    @currency:selected="currencySelected"
  )
  fv-theme-autocomplete(
    data-testid="themeAutocomplete"
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
      const res = this.settings ? this.settings.locale : null
      return res
    },
    theme() {
      const res = this.settings ? this.settings.theme : null
      return res
    }
  },
  mounted() {
    this.$store.dispatch('settings/getSettings')
  },
  methods: {
    currencySelected(v) {
      const newSettings = this.settings
      newSettings.currency = v
      this.$activeAccount.setSettings(newSettings)
    },
    languageSelected(v) {
      const newSettings = this.settings
      newSettings.locale = v
      this.$activeAccount.setSettings(newSettings)
    },
    themeSelected(v) {
      const newSettings = this.settings
      newSettings.theme = v
      this.$activeAccount.setSettings(newSettings)
    }
  }
}
</script>
