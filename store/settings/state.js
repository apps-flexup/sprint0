export default () => ({
  items: [],
  manageMenu: [],
  userMenu: [],
  accountMenu: [],
  buyerMenu: [],
  sellerMenu: [],
  globalMenu: [],
  manageNavBar: [],
  sellerNavBar: [],
  locales: ['en', 'fr'],
  fallbackLocale: 'en',
  settings: {},
  defaultSettings: {
    id: 0,
    account_id: null,
    currency: 'EUR', // Get currency from browser settings
    language: 'fr', // Get language from browser settings
    theme: 'light',
    price_nb_after_decimal_point: '2',
    vat_nb_after_decimal_point: '1'
  }
})
