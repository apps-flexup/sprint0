const dataTable = (_ctx) => ({
  async sortByRule(array, key, sortDesc = false, rule = null) {
    let i = 1
    while (i < array.length) {
      let first = array[i - 1]
      let second = array[i]
      if (rule) {
        first = await rule(first)
        second = await rule(second)
      } else {
        first = first[key]
        second = second[key]
      }
      if (typeof first === 'string') first = first.toLowerCase()
      if (typeof second === 'string') second = second.toLowerCase()
      if (!first) first = ''
      if (!second) second = ''
      if (first > second) {
        const tmp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = tmp
        i = 0
      }
      i++
    }
    if (sortDesc) array.reverse()
    return array
  },
  async applyRule(rule, item, itemKey, filter) {
    let displayedItem = item[itemKey]
    if (rule) {
      displayedItem = await rule(item)
    }
    if (typeof displayedItem === 'string') {
      const res = String.prototype.filtreAutocomplete.call(displayedItem.toString(), filter)
      if (res) return true
    }
    return false
  },
  async asyncArraySome(itemKeys, item, rules, filter) {
    for (const itemKey of itemKeys) {
      let res = false
      const rule = rules[itemKey]
      if (typeof rule === 'object') {
        const subRules = Object.keys(rule)
        for (const subRule of subRules) {
          res = await this.applyRule(rule[subRule], item, itemKey, filter)
          if (res) return true
        }
      } else {
        res = await this.applyRule(rule, item, itemKey, filter)
        if (res) return true
      }
    }
    return false
  },
  async asyncArrayEvery(filters, itemKeys, item, rules) {
    for (const filter of filters) {
      const res = await this.asyncArraySome(itemKeys, item, rules, filter)
      if (!res) return false
    }
    return true
  },
  async asyncArrayFilter(array, filters, rules) {
    const itemKeys = Object.keys(array[0])
    const res = await Promise.all(
      array.map(async (item) => {
        const res = await this.asyncArrayEvery(filters, itemKeys, item, rules)
        return res
      })
    )
    return array.filter((_v, index) => res[index])
  },
  async filter(array, filters, rules = {}) {
    if (!array || !array[0]) return []
    const res = await this.asyncArrayFilter(array, filters, rules)
    return res
  }
})

export default (ctx, inject) => {
  const res = dataTable(ctx)

  inject('dataTable', res)
}
