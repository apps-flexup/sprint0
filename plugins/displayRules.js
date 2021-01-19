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
    const locale = ctx.store.getters['settings/locale']
    const fallback = ctx.store.getters['settings/fallbackLocale']
    const res = instantTranslate(category.name, locale, fallback)
    return res
  },
  unit(item) {
    if (!item) return null
    const unit = item.unit
    if (!unit) return null
    const dimension = item.dimension
    let res = unit
    if (dimension) res += '(' + dimension + ')'
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
    const unit = item.unit
    if (!unit) return null
    const settings = ctx.store.getters['settings/settings']
    const locale = ctx.store.getters['settings/locale']
    const toCurrency = settings.currency
    const options = {
      style: 'currency',
      currency: toCurrency
    }
    const convertedPrice = await convert(fromCurrency, toCurrency, price)
    const formatedPrice = new Intl.NumberFormat(locale, options).format(
      convertedPrice
    )
    const res = formatedPrice.toString() + '/' + unit
    return res
  },
  vat(item) {
    if (!item) return null
    const vat = item.vat
    if (!vat) return null
    const res = vat + '%'
    return res
  }
})

export default (ctx, inject) => {
  const res = displayRules(ctx)

  inject('displayRules', res)
}
