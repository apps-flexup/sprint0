/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.filtreAutocomplete = function(filtre) {
  const str = (this || '').toLowerCase()
  const v = (filtre || '').toLowerCase()
  return str.includes(v)
}

export const mergeObjects = (dst, src) => {
  Object.keys(src).forEach((key) => {
    if (!dst[key]) dst[key] = src[key]
    else if (
      typeof src[key] === 'object' &&
      src[key] &&
      typeof dst[key] === 'object' &&
      dst[key]
    )
      mergeObjects(dst[key], src[key])
  })
}

export const instantTranslate = (array, locale, fallback) => {
  if (!array) return 'check instantTranslate (undefined string)'
  if (typeof array === 'string') return array
  const locales = Object.keys(array)
  if (Object.prototype.hasOwnProperty.call(array, locale)) {
    return array[locale]
  } else if (Object.prototype.hasOwnProperty.call(array, fallback)) {
    return array[fallback]
  }
  return array[locales[0]]
}

export const translateHeaders = (i18n, items) => {
  if (!items) return []
  if (!i18n) return items
  const res = items.map((item) => {
    const translated = i18n.t(item.text)
    return {
      text: translated,
      align: item.align,
      sortable: item.sortable,
      value: item.value
    }
  })
  return res
}

export const filterOffersDataTable = (item, v, _it) => {
  const nameValues = `${item}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterOrdersDataTable = (item, v, _it) => {
  const nameValues = `${item}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterPartnersDataTable = (item, v, _it) => {
  const nameValues = `${item}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterProductsDataTable = (item, v, _it) => {
  const nameValues = `${item}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterCategoryAutocomplete = (item, v, _it) => {
  const name = JSON.parse(JSON.stringify(item.name || {}))
  const nameValues = Object.keys(name)
    .map((k) => {
      return item.name[k]
    })
    .join(' ')
    .toLowerCase()
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterUnitAutocomplete = (item, v, _it) => {
  const nameValues = `${item.dimension} ${item.symbole} ${item.base}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterCurrencyAutocomplete = (item, v, _it) => {
  const nameValues = `${item.iso2} ${item.iso3} ${item.name}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterCountryAutocomplete = (item, v, _it) => {
  const nameValues = `${item.iso3} ${item.name} ${item.symbole}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterLanguageAutocomplete = (item, v, _it) => {
  const nameValues = `${item.name} ${item.iso2}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterLegalStructureAutocomplete = (item, v, _it) => {
  const nameValues = `${item.name} ${item.sigle}`
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterOfferAutocomplete = (item, v, _it) => {
  const nameValues = item.name
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterProductAutocomplete = (item, v, _it) => {
  const nameValues = item.name
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterThemeAutocomplete = (item, v, _it) => {
  const nameValues = item
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export const filterReferenceAutocomplete = (item, v, _it) => {
  const nameValues = item.key
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

// export default (ctx, inject) => {
//   const headers = translateHeaders(ctx.app.i18n)
//   inject('translateHeaders', headers)
// }
