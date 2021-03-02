import { convert } from './currencies'
import { instantTranslate } from './utils'

const displayRules = (ctx) => ({
  name(item) {
    if (!item) return null
    const name = item.name
    if (!name) return null
    const locale = ctx.store.getters['settings/locale']
    const fallback = ctx.store.getters['settings/fallbackLocale']
    const res = instantTranslate(name, locale, fallback)
    return res
  },
  category(item) {
    if (!item) return null
    const categoryId = item.category_id
    if (!categoryId) return null
    const category = ctx.store.getters['categories/find'](categoryId)
    if (!category) return null
    const name = category.name
    if (!name) return null
    const locale = ctx.store.getters['settings/locale']
    const fallback = ctx.store.getters['settings/fallbackLocale']
    const res = instantTranslate(name, locale, fallback)
    return res
  },
  unit(item) {
    if (!item) return null
    const unit = item.unit
    if (!unit) return null
    const i18n = ctx.app.i18n
    const dimension = i18n.t('units.dimension.' + item.dimension)
    let res = i18n.t('units.symbol.' + unit)
    if (dimension) res += ' (' + dimension + ')'
    return res
  },
  status(item) {
    if (!item) return null
    const status = item.status
    if (!item.status) return null
    const i18n = ctx.app.i18n
    const res = i18n.t('status.' + status)
    return res
  },
  legalStructure(item) {
    if (!item) return null
    const legalStructureId = item.legal_structure_id
    if (!legalStructureId) return null
    const legalStructure = ctx.store.getters['contracts/getLegalStructureById'](
      legalStructureId
    )
    if (!legalStructure) return null
    const res = legalStructure.name
    return res
  },
  country(item) {
    if (!item) return null
    const countryId = item.country_id
    if (!countryId) return null
    const country = ctx.store.getters['countries/find'](countryId)
    if (!country) return null
    const res = country.name
    return res
  },
  async priceWithUnit(item) {
    if (!item) return null
    const price = item.price
    if (!price) return null
    const fromCurrency = item.currency
    if (!fromCurrency) return null
    const settings = ctx.store.getters['settings/settings']
    const locale = ctx.store.getters['settings/locale']
    const toCurrency = settings.currency
    const minimumFractionDigits = settings.price_nb_after_decimal_point
    const options = {
      style: 'currency',
      currency: toCurrency,
      minimumFractionDigits
    }
    const convertedPrice = await convert(fromCurrency, toCurrency, price)
    const formatedPrice = new Intl.NumberFormat(locale, options).format(
      convertedPrice
    )
    if (!formatedPrice) return null
    const unit = item.unit
    if (!unit) return null
    const i18n = ctx.app.i18n
    const res = formatedPrice.toString() + '/' + i18n.t('units.symbol.' + unit)
    return res
  },
  async priceToPreferredCurrency(item) {
    if (!item) return null
    const price = item.price
    if (!price) return null
    const fromCurrency = item.currency
    if (!fromCurrency) return null
    const settings = ctx.store.getters['settings/settings']
    const locale = ctx.store.getters['settings/locale']
    const toCurrency = settings.currency
    const minimumFractionDigits = settings.price_nb_after_decimal_point
    const options = {
      style: 'currency',
      currency: toCurrency,
      minimumFractionDigits
    }
    const convertedPrice = await convert(fromCurrency, toCurrency, price)
    const res = new Intl.NumberFormat(locale, options).format(convertedPrice)
    return res
  },
  vat(item) {
    if (!item) return null
    const vat = item.vat / 100
    if (!vat) return null
    const settings = ctx.store.getters['settings/settings']
    const locale = ctx.store.getters['settings/locale']
    const minimumFractionDigits = settings.vat_nb_after_decimal_point
    const options = {
      style: 'percent',
      minimumFractionDigits
    }
    const res = new Intl.NumberFormat(locale, options).format(vat)
    return res
  },
  localeDate(item) {
    if (!item) return null
    const date = item.date
    if (!date) return null
    const locale = ctx.store.getters['settings/locale']
    const dte = new Date(date)
    const res = dte.toLocaleDateString(locale)
    return res
  },
  paymentStructure(item) {
    if (!item) return null
    const structureId = item.structure
    if (!structureId) return null
    const structure = ctx.store.getters['paymentStructures/findById'](
      structureId
    )
    if (!structure) return null
    const res = structure.name
    return res
  },
  paymentConditionPriority(item) {
    if (!item) return null
    const references = item.references
    if (!references) return null
    const priorityReference = references.r1
    if (!priorityReference) return null
    const priority = priorityReference.key
    const i18n = ctx.app.i18n
    const res = i18n.t('references.r1.' + priority)
    return res
  },
  paymentConditionPaymentTerm(item) {
    if (!item) return null
    const references = item.references
    if (!references) return null
    const paymentTermReference = references.r2
    if (!paymentTermReference) return null
    const paymentTerm = paymentTermReference.key
    const i18n = ctx.app.i18n
    const res = i18n.t('references.r2.' + paymentTerm)
    return res
  },
  paymentConditionInterestRate(item) {
    if (!item) return null
    const references = item.references
    if (!references) return null
    const interestRateReference = references.r3
    if (!interestRateReference) return null
    const interestRate = interestRateReference.key
    const i18n = ctx.app.i18n
    const res = i18n.t('references.r3.' + interestRate)
    return res
  },
  paymentConditionRisk(item) {
    if (!item) return null
    const res = item.risk + '%'
    return res
  },
  paymentStructureRisk(item) {
    if (!item) return null
    const res = item.risk + '%'
    return res
  }
})

export default (ctx, inject) => {
  const res = displayRules(ctx)

  inject('displayRules', res)
}
