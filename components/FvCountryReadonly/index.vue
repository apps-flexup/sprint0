<template lang="pug">
.fv-country-readonly
  fv-readonly-field(
    :label="label"
    :value="country"
  )
</template>

<script>
export default {
  name: 'FvCountryReadonly',
  props: {
    value: {
      type: String,
      default() {
        return null
      },
    },
    label: {
      type: String,
      default() {
        return null
      },
    },
  },
  computed: {
    country() {
      const country = this.$store.getters['countries/findByIso3'](this.value)
      if (!country) return null
      const res = country.name
      return res
    },
  },
  mounted() {
    this.$store.dispatch('countries/get')
  },
}
</script>
