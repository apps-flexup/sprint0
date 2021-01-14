import { instantTranslate } from './utils'

const displayRules = (ctx) => ({
  category(categoryId) {
    if (!categoryId) return null
    const category = ctx.store.getters['categories/find'](categoryId)
    const locale = ctx.store.getters['settings/locale']
    const fallback = ctx.store.getters['settings/fallbackLocale']
    const res = instantTranslate(category.name, locale, fallback)
    return res
  },
  status(status) {
    const i18n = ctx.app.i18n
    const res = i18n.t('status.' + status)
    return res
  },
  legalStructure(legalStructureId) {
    if (!legalStructureId) return null
    const legalStructure = ctx.store.getters['contracts/getLegalStructureById'](
      legalStructureId
    )
    const res = legalStructure.name
    return res
  },
  country(countryId) {
    if (!countryId) return null
    const country = ctx.store.getters['countries/find'](countryId)
    const res = country.name
    return res
  }
})

export default (ctx, inject) => {
  const res = displayRules(ctx)

  inject('displayRules', res)
}
