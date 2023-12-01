import colors from 'vuetify/es5/util/colors'
import 'reflect-metadata'

require('dotenv').config()

const homeUrl = encodeURIComponent(process.env.HOME_URL)

export default {
  ssr: false,
  components: true,
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
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      {
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,500&display=swap',
        rel: 'stylesheet'
      }
    ]
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
    '~/plugins/globalcomponents',
    '~/plugins/axios',
    '~/plugins/activeAccount',
    '~/plugins/data',
    '~/plugins/directory',
    '~/plugins/i18n',
    '~/plugins/utils',
    '~/plugins/directives',
    '~/plugins/currencies',
    '~/plugins/asyncComputed',
    '~/plugins/dataTable',
    '~/plugins/displayRules',
    '~/plugins/rights',
    '~/plugins/vuedraggable'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxt/typescript-build', '@nuxt/components', '@nuxtjs/vuetify'],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/pwa', '@nuxtjs/dotenv'],
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
    redirect: {
      login: '/login',
      logout: '/',
      home: '/'
    },
    strategies: {
      local: {
        scheme: 'local',
        endpoints: {
          login: {
            url: 'https://api.staging.last3lier.xyz/login',
            method: 'POST',
            propertyName: 'token'
          },
          logout: false,
          user: {
            url: 'https://api.staging.last3lier.xyz/api',
            method: 'get',
            propertyName: ''
          }
        },
        token: {
          type: 'Bearer'
        }
      },
      keycloak: {
        scheme: 'oauth2',
        endpoints: {
          authorization: process.env.OAUTH_ENDPOINT,
          userInfo: process.env.OAUTH_USER_ENDPOINT,
          token: process.env.OAUTH_ENDPOINT_TOKEN,
          logout: `${process.env.OAUTH_ENDPOINT_LOGOUT}?redirect_uri=${homeUrl}`
        },
        user: {
          property: false
        },
        token: {
          property: 'access_token',
          type: 'Bearer',
          name: 'Authorization',
          maxAge: 300
        },
        refreshToken: {
          property: 'refresh_token',
          maxAge: 60 * 60 * 24 * 30
        },
        responseType: 'code',
        grantType: 'authorization_code',
        clientId: process.env.KEYCLOAK_CLIENT_ID,
        scope: ['openid', 'profile', 'email'],
        codeChallengeMethod: 'S256'
      }
    },
    plugins: ['~/plugins/auth.js']
  },
  router: {
    middleware: ['auth']
  },
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
