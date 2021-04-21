<template lang="pug">
.fv-settings-index
  h1(data-testid="title") {{ $t('settings.title') }}
  v-card
    v-tabs(v-model="tab")
      v-tab(
        data-testid="tab"
        v-for="item in items"
        :key="item.tab"
      ) {{ $t(item.tab) }}
      v-tabs-items(v-model="tab")
        v-tab-item(
          v-for="item in items"
          :key="item.tab"
        )
          v-card-text
            component(
              data-testid="tabItem"
              :is="item.content"
              v-bind="item.props"
            )
</template>

<script>
export default {
  name: 'FvSettingsIndex',
  data() {
    return {
      tab: null
    }
  },
  computed: {
    items() {
      const selectedAccountId = this.$store.getters['accounts/selected']
      const account = this.$store.getters['accounts/findById'](
        selectedAccountId
      )
      const res = [
        {
          tab: 'settings.default.title',
          content: 'fv-settings-default',
          props: {
            account
          }
        },
        { tab: 'settings.others.title', content: 'fv-settings-others' }
      ]
      return res
    }
  },
  mounted() {
    this.$store.dispatch('accounts/get')
    console.log('Composant ', this.$options.name)
  }
}
</script>
