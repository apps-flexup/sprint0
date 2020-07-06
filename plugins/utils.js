// Object.prototype.flatI8n = function() {
//   const obj = this
//   const nameValues = Object.keys(obj)
//     .map((k) => {
//       return obj[k]
//     })
//     .join(' ')
//     .toLowerCase()
//   return nameValues
// }

/* eslint no-extend-native: ["error", { "exceptions": ["String"] }] */
String.prototype.filtreAutocomplete = function(filtre) {
  const str = (this || '').toLowerCase()
  const v = (filtre || '').toLowerCase()
  return str.includes(v)
}

const translateHeaders = (i18n) => (items) => {
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

export const filterListAutocomplete = (item, v, it) => {
  console.log('item ', item)
  console.log('it :', it)
  const nameValues = `${item.dimension} ${item.symbole} ${item.base}`
  // const name = JSON.parse(JSON.stringify(item.name || {}))
  // // const nameValues = Object.prototype.flatI18n.call()
  // const nameValues = Object.keys(name)
  //   .map((k) => {
  //     return item.name[k]
  //   })
  //   .join(' ')
  //   .toLowerCase()
  const res = String.prototype.filtreAutocomplete.call(nameValues, v)
  return res
}

export default (ctx, inject) => {
  const headers = translateHeaders(ctx.app.i18n)
  inject('translateHeaders', headers)
}
