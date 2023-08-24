export * from '~~/.nuxt-storybook/storybook/preview.js'

export const decorators = [
  (story) => ({
    components: { story },
    beforeCreate() {
      this.$activeAccount.set(1)
    },
    template: '<v-app><story/></v-app>'
  })
]

export const parameters = {
  options: {
    sortStoriesByKind: true
  }
}
