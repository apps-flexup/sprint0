import { convert } from '~/plugins/currencies'

export default {
  computed: {
    preferredCurrency() {
      const iso = this.$activeAccount.settings().currency
      const res = this.$store.getters['currencies/findIso'](iso)
      return res
    },
    nbDigitsAfterDecimalPoint() {
      const settings = this.$activeAccount.settings()
      if (!settings) return null
      const res = settings.price_nb_after_decimal_point
      return res
    },
    suffix() {
      const unit = this.search?.unit
      let translatedUnit = ''
      if (unit) {
        translatedUnit = this.$t(`units.symbol.${unit.unit || unit}`)
      }
      return `${this.preferredCurrency?.symbole}/${translatedUnit}`
    }
  },
  mounted() {
    this.$store.dispatch('currencies/get')
  },
  methods: {
    async convertToPreferredCurrency(
      amount,
      fromCurrency,
      truncatePrice = false
    ) {
      if (!amount) return null
      if (!fromCurrency) return null
      const toCurrency = this.preferredCurrency.iso3
      if (!toCurrency) return null
      let res = await convert(fromCurrency, toCurrency, amount)
      if (truncatePrice && this.nbDigitsAfterDecimalPoint) {
        const multiplier = 10 ** this.nbDigitsAfterDecimalPoint
        res = (Math.round(res * multiplier) / multiplier).toFixed(
          this.nbDigitsAfterDecimalPoint
        )
      }
      return res
    }
  }
}
