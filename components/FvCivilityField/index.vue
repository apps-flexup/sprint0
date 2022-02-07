<template lang="pug">
  .fv-civility-field
    v-select(
      data-testid='titleField'
      outlined
      :items="titles"
      :label="$t('forms.accounts.new.civility')"
      @input="civilityChanged"
    )
</template>

<script>
export default {
  name: 'FvCivilityField',
  props: {
    payload: {
      type: Object,
      default() {
        return null
      },
    },
  },
  data() {
    return {
      titles_trad: ['mr', 'ms', 'miss'],
    }
  },
  computed: {
    civility() {
      const res = this.payload ? this.payload.title : null
      return res
    },
    civilities() {
      const res = this.titles_available.map((value) => {
        const text = this.$t(`forms.accounts.new.titles.${value}`)
        return { text, value }
      })
      return res
    },
  },
  methods: {
    civilityChanged(title) {
      const payload = {
        title,
      }
      this.$emit('payload:changed', payload)
    },
  },
}
</script>
