import Vue from 'vue'

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

// // Pour la traduction des i18n
// const instantTranslate = (tableau, language = defaultLocale()) => {
//   if (typeof tableau === 'string') return tableau
//   const langues = Object.keys(tableau)
//   if (tableau.hasOwnProperty(language)) {
//     return tableau[language]
//   }
//   return tableau[langues[0]]
// }
// Vue.directive('to-locale', (el, binding, vnode) => {
//   // const locale = vnode.context.$store.getters['settings/locale']
//   const locale = vnode.context.$i18n.locale
//   const res = binding.value
//   let valeur = instantTranslate(res, locale)
//   // let valeur = vnode.context.$instantTranslate(binding.value)
//   if (typeof valeur !== 'string') {
//     if (valeur === undefined) valeur = 'Translation Impossible'
//     // Transformation du rendu
//     valeur = binding.arg === 'initial' ? valeur.charAt(0) : valeur
//   }
//   el.innerHTML = valeur
// })
