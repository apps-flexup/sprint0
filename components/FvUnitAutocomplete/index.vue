<template lang="pug">
  .fv-unit-autocomplete
    fv-auto-complete(
      v-model="this.unit"
      :items="items"
      :label="$t('forms.products.new.unit')"
      @autocomplete:selected="selected"
    )
</template>

<script>
export default {
  name: 'FvUnitAutocomplete',
  props: {
    unit: {
      type: Number,
      default() {
        return null
      }
    }
  },
  computed: {
    items() {
      const res = this.$store.getters['units/all']
      return res
    }
  },
  mounted() {
    console.log('Composant ', this.$options.name)
    this.$store.dispatch('units/get')
  },
  methods: {
    selected(v) {
      if (v) {
        const dimension = this.$store.getters['units/find'](v)
        const payload = {
          dimension,
          unit: v
        }
        this.$emit('unit:selected', payload)
      } else {
        this.$emit('unit:selected', v)
      }
    }
  }
}
</script>
