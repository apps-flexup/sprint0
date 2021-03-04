export * from '~~/.nuxt-storybook/storybook/preview.js'

export const decorators = [(story) => ({
  components: { story },
  beforeCreate() {
    this.$store.commit('accounts/setCurrent', 1)
  },
  template: '<v-app><story/></v-app>'
})];

export const parameters = {
  options: {
    sortStoriesByKind: true
  }
}
