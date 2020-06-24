import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app, store }) => {
  const i18n = new VueI18n({
    locale: store.state.locale,
    fallbackLocale: store.state.fallbackLocale,
    messages: {
      fr: require('@/lang/fr.json'),
      en: require('@/lang/en.json')
    }
  })
  app.i18n = i18n
  app.i18n.path = (link) => {
    return `/${link}`
  }
}
