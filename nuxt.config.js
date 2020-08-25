import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: {
    baseURL: process.env.API_URL
  },
  manifest: {
    name: 'Flexup - Sprint 0',
    short_name: 'sprint0',
    lang: 'en',
    start_url: '/',
    icons: [
      {
        src: '/logo.svg',
        sizes: '150x150'
      }
    ]
    // display: 'standalone'
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://fonts.googleapis.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*',
        handler: 'cacheFirst',
        method: 'GET',
        strategyOptions: { cacheableResponse: { statuses: [0, 200] } }
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#ff0000',
    height: '15px'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    '~/plugins/activeAccount',
    '~/plugins/globalcomponents',
    '~/plugins/data',
    '~/plugins/i18n',
    '~/plugins/utils',
    '~/plugins/directives'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth', '@nuxtjs/pwa', '@nuxtjs/dotenv'],
  // i18n: {
  //   locales: ['en', 'fr'],
  //   defaultLocale: 'en',
  //   vueI18n: {
  //     fallbackLocale: 'en'
  //   }
  // },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    responseType: 'json',
    headers: {
      Accept: 'application/json'
    }
  },
  auth: {
    strategies: {
      keycloak: {
        _scheme: 'oauth2',
        client_id: process.env.KEYCLOAK_CLIENT_ID,
        authorization_endpoint: process.env.OAUTH_ENDPOINT,
        access_type: 'public',
        userinfo_endpoint: process.env.OAUTH_USER_ENDPOINT,
        access_token_endpoint: process.env.OAUTH_ENDPOINT_TOKEN
      }
    },
    plugins: ['~/plugins/auth.js']
  },
  router: {
    middleware: ['auth']
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {}
    transpile: ['@nuxtjs/auth'],
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  }
}
