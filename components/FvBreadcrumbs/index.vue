<template lang="pug">
.fv-breadcrumbs
  v-breadcrumbs(
    data-testid="breadcrumbs"
    v-if="$auth.loggedIn"
    :items="crumbs"
    :divider="divider"
  )
</template>

<script>
export default {
  name: 'FvBreadCrumbs',
  props: {
    account: {
      type: String,
      default() {
        return null
      }
    },
    space: {
      type: String,
      default() {
        return null
      }
    },
    divider: {
      type: String,
      default() {
        return '>'
      }
    }
  },
  computed: {
    crumbs() {
      const crumbs = []
      const prefixCrumb = {
        text:
          this.$t('breadcrumbs.account') +
          this.account +
          ' / ' +
          this.$t('breadcrumbs.space') +
          ' ' +
          this.$t('spaces.' + this.space),
        href: '/',
        disabled: false
      }
      crumbs.push(prefixCrumb)
      this.$route.matched.map((item) => {
        let previousIndex = 1
        while (previousIndex > 0) {
          const index = item.path.indexOf('/', previousIndex)
          if (index > 0) {
            const crumb = this.createCrumb(
              item.path.substring(0, index),
              item.name.substring(0, index - 1),
              false
            )
            crumbs.push(crumb)
          }
          previousIndex = index + 1
        }
        const crumb = this.createCrumb(item.path, item.name, true)
        crumbs.push(crumb)
      })
      return crumbs
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
  },
  methods: {
    createCrumb(href, text, disabled) {
      if (text === 'accounts-id') {
        const account = this.$store.getters['accounts/findById'](
          this.$route.params.id
        )
        text = account ? account.name : null
      } else if (text === 'products-action-') {
        const action = this.$route.params.action
        href = '/products'
        text = this.$t(`breadcrumbs.route.${text}${action}`)
      } else if (text === 'offers-action-') {
        const action = this.$route.params.action
        href = '/offers'
        text = this.$t(`breadcrumbs.route.${text}${action}`)
      } else {
        text = this.$t('breadcrumbs.route.' + text)
      }
      const crumb = {
        href,
        text,
        disabled
      }
      return crumb
    }
  }
}
</script>
