/* eslint no-extend-native: ["error", { "exceptions": ["String", "Array"] }] */
String.prototype.filtreAutocomplete = function(filtre) {
  const str = (this || '').toLowerCase()
  const v = (filtre || '').toLowerCase()
  return str.includes(v)
}

Array.prototype.sortByKey = function(key) {
  this.sort((a, b) => {
    if (a[key] < b[key]) return -1
    else if (a[key] > b[key]) return 1
    return 0
  })
}

export const translateHeaders = (i18n, items) => {
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

// const translateHeaders = (i18n) => (items) => {
//   const res = items.map((item) => {
//     const translated = i18n.t(item.text)
//     return {
//       text: translated,
//       align: item.align,
//       sortable: item.sortable,
//       value: item.value
//     }
//   })
//   return res
// }

export const filterDataTable = (array, filters) => {
  if (!array[0]) return []
  const itemKeys = Object.keys(array[0])
  const res = array.filter((item) => {
    return filters.every((filter) => {
      return itemKeys.some((itemKey) => {
        if (typeof item[itemKey] === 'string') {
          return String.prototype.filtreAutocomplete.call(item[itemKey], filter)
        }
        return false
      })
    })
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

// export default (ctx, inject) => {
//   const headers = translateHeaders(ctx.app.i18n)
//   inject('translateHeaders', headers)
// }
