import Vue from 'vue'
import { convert } from '~/plugins/currencies'
import { instantTranslate } from '~/plugins/utils'

Vue.directive('partner', (el, binding, vnode) => {
  const res = parseInt(binding.value)
  vnode.context.$repos.accounts.show(res).then((partner) => {
    el.innerHTML = partner.name
  })
})

Vue.directive('locale', (el, binding, vnode) => {
  const res = binding.value
  const t = vnode.context.$i18n.$t
  el.innerHTML = t(res)
})

Vue.directive('to-unit', (el, binding, _vnode) => {
  // const locale = vnode.context.$i18n.locale
  // const fallbackLocale = vnode.context.$i18n.fallbackLocale
  const unit = binding.value.unit
  const dimension = binding.value.dimension
  // const unitToDisplay = vnode.context.$store.getters['units/findByDimension'](
  //   dimension,
  //   unit
  // )
  // const res = `${unitToDisplay.symbole} ${unit} (${dimension})`
  const res = `${unit} (${dimension})`
  el.innerHTML = res
})

Vue.directive('to-currency-quantity', (el, binding, vnode) => {
  const locale = vnode.context.$i18n.locale
  const valeur = binding.value
  const options = {
    style: 'currency',
    currency: valeur.currency
  }
  const amount = parseFloat(valeur.price) * parseFloat(valeur.quantity)
  const valueToDisplay = new Intl.NumberFormat(locale, options).format(amount)
  const res = `${valueToDisplay}`
  el.innerHTML = res
})

Vue.directive('to-currency', (el, binding, vnode) => {
  const locale = vnode.context.$i18n.locale
  const valeur = binding.value
  const options = {
    style: 'currency',
    currency: valeur.currency
  }
  let valueToDisplay = valeur.amount
  if (valeur.currency) {
    valueToDisplay = new Intl.NumberFormat(locale, options).format(valeur.amount)
  }
  const res = `${valueToDisplay}`
  el.innerHTML = res
})

Vue.directive('to-preferred-currency', async (el, binding, vnode) => {
  const locale = 'FR'
  const value = binding.value
  const amount = value.amount
  const fromCurrency = value.currency
  const toCurrency = vnode.context.$store.getters['settings/settings'].currency
  const options = {
    style: 'currency',
    currency: toCurrency
  }
  let convertedAmount = amount
  if (fromCurrency !== toCurrency) {
    convertedAmount = await convert(fromCurrency, toCurrency, amount)
  }
  const valueToDisplay = new Intl.NumberFormat(locale, options).format(convertedAmount)
  el.innerHTML = `${valueToDisplay}`
})

Vue.directive('to-locale', (el, binding, vnode) => {
  const locale = vnode.context.$i18n.locale
  const fallbackLocale = vnode.context.$i18n.fallbackLocale
  const res = binding.value
  let valeur = instantTranslate(res, locale, fallbackLocale)
  // let valeur = vnode.context.$instantTranslate(binding.value)
  if (typeof valeur !== 'string') {
    if (valeur === undefined) valeur = 'Translation Impossible'
    // Transformation du rendu
    valeur = binding.arg === 'initial' ? valeur.charAt(0) : valeur
  }
  el.innerHTML = valeur
})

Vue.directive('to-category', (el, binding, vnode) => {
  const locale = vnode.context.$i18n.locale
  const fallbackLocale = vnode.context.$i18n.fallbackLocale
  const res = binding.value
  const category = vnode.context.$store.getters['categories/find'](res)
  let valeur = null
  if (category) {
    valeur = instantTranslate(category.name, locale, fallbackLocale)
  }
  el.innerHTML = valeur
})
