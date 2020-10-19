<template lang="pug">
.fv-settings-default
  fv-language-select
  fv-currency-autocomplete(
    :currency="currency"
    @currency:selected="currencySelected"
  )
  fv-theme-select
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
      const accountId = this.account.id
      const res = this.$store.getters['settings/settings'](accountId)
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
    }
  }
}
</script>
