import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages: {
    fr: require('@/lang/fr.json'),
    en: require('@/lang/en.json')
  }
})

export default i18n
