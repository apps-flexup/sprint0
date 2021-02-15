const { nuxifyStorybook } = require('../.nuxt-storybook/storybook/main.js')

module.exports = nuxifyStorybook({
  webpackFinal (config, options) {
    return config
  },
  stories: [
    '~/components/FvStatusProgress/*.stories.mdx',
    '~/components/FvPrimaryButton/*.stories.mdx',
    '~/components/FvCountryAutocomplete/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls'
  ]
})
