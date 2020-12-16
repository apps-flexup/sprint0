import { instantTranslate } from '~/plugins/utils'

const dataTable = (ctx) => ({
  sortByKey(array, key, sortDesc = false) {
    const res = array.sort((a, b) => {
      let first = a[key]
      let second = b[key]
      if (typeof first === 'object') {
        const locale = ctx.store.getters['settings/locale']
        const fallback = ctx.store.getters['settings/fallbackLocale']
        first = instantTranslate(a[key], locale, fallback)
        second = instantTranslate(b[key], locale, fallback)
      }
      if (first < second) return -1
      else if (first > second) return 1
      return 0
    })
    if (sortDesc)
      res.reverse()
    return res
  },
  filter(array, filters) {
    if (!array || !array[0]) return []
    const itemKeys = Object.keys(array[0])
    const res = array.filter((item) => {
      return filters.every((filter) => {
        return itemKeys.some((itemKey) => {
          if (typeof item[itemKey] === 'string') {
            return String.prototype.filtreAutocomplete.call(item[itemKey], filter)
          }
          if (typeof item[itemKey] === 'object') {
            const locale = ctx.store.getters['settings/locale']
            const fallback = ctx.store.getters['settings/fallbackLocale']
            const str = instantTranslate(item[itemKey], locale, fallback)
            if (typeof str === 'string')
              return String.prototype.filtreAutocomplete.call(str, filter)
            return false
          }
          return false
        })
      })
    })
    return res
  }
})

export default (ctx, inject) => {
  const res = dataTable(ctx)

  inject('dataTable', res)
}
