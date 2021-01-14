import { instantTranslate } from './utils'

const displayRules = (ctx) => ({
  category(categoryId) {
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
  }
})

export default (ctx, inject) => {
  const res = displayRules(ctx)

  inject('displayRules', res)
}
