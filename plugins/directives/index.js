import Vue from 'vue'

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

// Pour la traduction des i18n
const instantTranslate = (tableau, language, fallback) => {
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
  // const locale = vnode.context.$store.getters['settings/locale']
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
  const valeur = instantTranslate(category.name, locale, fallbackLocale)
  el.innerHTML = valeur
})
