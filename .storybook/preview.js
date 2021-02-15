export * from '~~/.nuxt-storybook/storybook/preview.js'

export const decorators = [(story) => ({
  components: { story },
  template: '<v-app><story/></v-app>'
})];
