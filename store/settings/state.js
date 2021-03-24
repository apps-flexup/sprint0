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
    locale: 'fr', // Get language from browser settings
    theme: 'light',
    price_nb_after_decimal_point: '2',
    vat_nb_after_decimal_point: '1',
    headers: {
      products: [
        {
          align: 'left',
          sortable: true,
          text: 'headers.products.name',
          value: 'name',
          order: 0,
          customizable: false,
          active: true,
          enabled: true
        },
        {
          align: 'left',
          sortable: true,
          text: 'headers.products.category',
          value: 'category_id',
          order: 1,
          customizable: true,
          active: true,
          enabled: true
        },
        {
          align: 'left',
          sortable: true,
          text: 'headers.products.unit',
          value: 'unit',
          order: 2,
          customizable: true,
          active: true,
          enabled: true
        },
        {
          align: 'center',
          sortable: true,
          text: 'headers.products.status',
          value: 'status',
          order: 3,
          customizable: true,
          active: true,
          enabled: true
        },
        {
          align: 'left',
          sortable: false,
          text: 'headers.actions',
          value: 'actions',
          order: 4,
          customizable: false,
          active: true,
          enabled: true
        }
      ]
    }
  }
})
