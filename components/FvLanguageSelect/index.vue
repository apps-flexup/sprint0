<template lang="pug">
.fv-language-select
  v-select(
    :items="items"
    :outlined="true"
    :value="value"
    :label="$t('languages.language')"
    @input="selected"
  )
    template(v-slot:item='{ item }')
      div {{ $t('languages.' + item)}}
    template(v-slot:selection='{ item }')
      div {{ $t('languages.' + item)}}
</template>

<script>
export default {
  name: 'FvLanguageSelect',
  inheritAttrs: true,
  computed: {
    items() {
      const res = this.$store.getters.locales
      return res
    },
    value() {
      const res = this.$store.getters.locale
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      this.$store.dispatch('setLocale', v)
      this.$i18n.locale = v
    }
  }
}
</script>
