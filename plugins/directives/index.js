import Vue from 'vue'

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
  const valueToDisplay = new Intl.NumberFormat(locale, options).format(
    valeur.amount
  )
  const res = `${valueToDisplay}`
  el.innerHTML = res
})

Vue.directive('to-preferred-currency', (el, binding, vnode) => {
  const locale = vnode.context.$i18n.locale
  const valeur = binding.value
  // TODO: Get preferred currency
  const options = {
    style: 'currency',
    currency: 'EUR'
  }
  const valueToDisplay = new Intl.NumberFormat(locale, options).format(valeur)
  const res = `${valueToDisplay}`
  el.innerHTML = res
})

// Pour la traduction des i18n
const instantTranslate = (tableau, language, fallback) => {
  if (!tableau) return 'check instantTranslate (undefined string)'
  if (typeof tableau === 'string') return tableau
  const langues = Object.keys(tableau)
  if (Object.prototype.hasOwnProperty.call(tableau, language)) {
    return tableau[language]
  } else if (Object.prototype.hasOwnProperty.call(tableau, fallback)) {
    return tableau[fallback]
  }
  return tableau[langues[0]]
}
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
