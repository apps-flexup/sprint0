const dataTable = (_ctx) => ({
  sortByKey(array, key, sortDesc = false, rule = null) {
    const res = array.sort((a, b) => {
      let first = a[key]
      let second = b[key]
      if (rule) {
        first = rule(first)
        second = rule(second)
      }
      if (typeof first === 'string') first = first.toLowerCase()
      if (typeof second === 'string') second = second.toLowerCase()
      if (first < second) return -1
      else if (first > second) return 1
      return 0
    })
    if (sortDesc) res.reverse()
    return res
  },
  filter(array, filters, rules = {}) {
    if (!array || !array[0]) return []
    const itemKeys = Object.keys(array[0])
    const res = array.filter((item) => {
      return filters.every((filter) => {
        return itemKeys.some((itemKey) => {
          let displayedItem = item[itemKey]
          if (rules[itemKey]) {
            displayedItem = rules[itemKey](displayedItem)
          }
          if (typeof displayedItem === 'string') {
            return String.prototype.filtreAutocomplete.call(
              displayedItem.toString(),
              filter
            )
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
