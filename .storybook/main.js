module.exports = {
  stories: ['../components/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-actions/register',
    'storybook-addon-vue-info/lib/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-links/register'
  ]
}
