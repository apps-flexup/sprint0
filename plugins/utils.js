/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.filtreAutocomplete = function(filtre) {
  const str = (this || '').toLowerCase()
  const v = (filtre || '').toLowerCase()
  return str.includes(v)
}

export const sortArrayByKey = (arr, key) => {
  arr.sort((a, b) => {
    if (a[key] < b[key]) return -1
    if (a[key] > b[key]) return 1
    return 0
  })
}

export const camelToSnakeCase = (str) => {
  if (!str) return null
  const res = str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
  return res
}

export const arrayDiff = (a1, a2) => {
  return a2.filter((x2) => {
    return !a1.some((x1) => {
      return JSON.stringify(x1) === JSON.stringify(x2)
    })
  })
}

export const deepDiff = (o1, o2) => {
  const diff = Object.keys(o2).reduce((diff, key) => {
    if (Array.isArray(o1[key]) && Array.isArray(o2[key])) {
      return {
        ...diff,
        [key]: arrayDiff(o1[key], o2[key])
      }
    } else if (
      o1[key] &&
      typeof o1[key] === 'object' &&
      o2[key] &&
      typeof o2[key] === 'object'
    ) {
      return {
        ...diff,
        [key]: deepDiff(o1[key], o2[key])
      }
    } else if (o1[key] === o2[key]) {
      return diff
    } else {
      return {
        ...diff,
        [key]: o2[key]
      }
    }
  }, {})
  return diff
}

// TODO: Ne pas assumer qu'on a la prop text
//       Prendre le nom de la prop en param (default = 'text' ?)
//       Check si la prop existe
export const mergeArrays = (a1, a2) => {
  for (let i = 0; i < a1.length; i++) {
    const tmp = a2.find((e) => e.text === a1[i].text)
    if (tmp) a1[i] = tmp
  }
  a2.forEach((element) => {
    const tmp = a1.find((e) => e.text === element.text)
    if (!tmp) a1.push(element)
  })
}

export const mergeObjects = (dst, src) => {
  if (Array.isArray(dst) && Array.isArray(src)) {
    mergeArrays(dst, src)
  } else if (dst && typeof dst === 'object' && src && typeof src === 'object') {
    Object.keys(src).forEach((key) => {
      if (Array.isArray(dst[key]) && Array.isArray(src[key])) {
        mergeArrays(dst[key], src[key])
      } else if (
        typeof src[key] === 'object' &&
        src[key] &&
        typeof dst[key] === 'object' &&
        dst[key]
      ) {
        mergeObjects(dst[key], src[key])
      } else {
        dst[key] = src[key]
      }
    })
  } else {
    dst = src
  }
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
      ...item,
      text: translated
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
