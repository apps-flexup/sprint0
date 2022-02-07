<template lang="pug">
.fv-settings-others
  fv-number-field(
    data-testid="priceNbDigits"
    :value="priceNbDigits"
    :label="$t('settings.others.labels.priceNbDigits')"
    @input="priceNbDigitsChanged"
  )
  fv-number-field(
    data-testid="defaultVat"
    :value="defaultVat"
    :label="$t('settings.others.labels.defaultVat')"
    @input="defaultVatChanged"
  )
  fv-number-field(
    data-testid="vatNbDigits"
    :value="vatNbDigits"
    :label="$t('settings.others.labels.vatNbDigits')"
    @input="vatNbDigitsChanged"
  )
</template>

<script>
export default {
  name: 'FvSettingsOthers',
  computed: {
    settings() {
      const res = this.$activeAccount.settings()
      return res
    },
    priceNbDigits() {
      const res = this.settings ? this.settings.price_nb_after_decimal_point : null
      return res
    },
    defaultVat() {
      const res = this.settings ? this.settings.default_vat : null
      return res
    },
    vatNbDigits() {
      const res = this.settings ? this.settings.vat_nb_after_decimal_point : null
      return res
    },
  },
  methods: {
    priceNbDigitsChanged(n) {
      const newSettings = this.settings
      newSettings.price_nb_after_decimal_point = n
      this.$activeAccount.setSettings(newSettings)
    },
    defaultVatChanged(n) {
      const newSettings = this.settings
      newSettings.default_vat = n
      this.$activeAccount.setSettings(newSettings)
    },
    vatNbDigitsChanged(n) {
      const newSettings = this.settings
      newSettings.vat_nb_after_decimal_point = n
      this.$activeAccount.setSettings(newSettings)
    },
  },
}
</script>
