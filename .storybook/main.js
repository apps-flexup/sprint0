const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {
    return config
  },
  stories: [
    // '~/components/**/*.stories.mdx'
    '~/components/FvVatField/*.stories.mdx'
    // '~/components/FvThirdPartyAccountCard/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls'
  ]
})
