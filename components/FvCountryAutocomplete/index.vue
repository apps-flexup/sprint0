<template lang="pug">
  .fv-country-autocomplete
    fv-auto-complete(
      v-model="this.country"
      :items="items"
      :label="$t('forms.products.new.country')"
      @autocomplete:selected="selected"
    )
</template>

<script>
export default {
  name: 'FvCountryAutocomplete',
  props: {
    country: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$activeAccount.currencies()
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
  },
  methods: {
    selected(v) {
      // TODO convertir avec ISO3
      this.$emit('country:selected', v)
    }
  }
}
</script>
