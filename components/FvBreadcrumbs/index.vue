<template lang="pug">
.fv-breadcrumbs
  v-breadcrumbs(
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
    console.log('Composant ', this.$options.name)
  },
  methods: {
    createCrumb(href, text, disabled) {
      const crumb = {
        href,
        text: this.$t('breadcrumbs.route.' + text),
        disabled
      }
      return crumb
    }
  }
}
</script>
