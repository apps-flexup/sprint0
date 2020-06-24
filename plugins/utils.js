const translateHeaders = (i18n) => (items) => {
  console.log('PLop')
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

export default (ctx, inject) => {
  const t = translateHeaders(ctx.app.i18n)
  inject('translateHeaders', t)
}
